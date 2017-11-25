/**
 * @flow
 */
/* eslint class-methods-use-this: 0 */

import { Colors, ThemeManager } from 'react-native-ui-lib'
import { Navigation } from 'react-native-navigation'
import { Platform } from 'react-native'
import { registerScreens } from './registerScreens'
import Constants from './lib/constants'
import Provider from './lib/provider'
import Stores from './lib/stores'
import TabBar from './lib/config/TabBar'

Colors.loadColors({
  complete: '#26a65b',
  completeIcon: '#4abe7a',
  incomplete: '#efefef',
  incompleteLight: '#efefef',
  active: '#fec730',
  activeLight: '#ffd45f',
  locked: '#efefef',
  lockedLight: '#F4F6F7',
  unknown: '#efefef',
  disabledBackground: '#CCCCCC',
  lightBackground: '#EEEEEE',
})

ThemeManager.setTheme({
  primaryColor: Colors.purple30,
  CTA: {
    backgroundColor: Colors.purple30,
    textColor: Colors.light10,
  },
  titleColor: Colors.blue10,
  subtitleColor: Colors.blue40,
})

class App {
  store: any;
  constructor() {
    this.store = Stores
    registerScreens(this.store, Provider)

    this.startApp('unauthorised')
  }

  startApp(root: string) {
    switch (root) {
      case 'unauthorised': {
        Navigation.startSingleScreenApp({
          screen: {
            ...Constants.Screens.WELCOME_SCREEN,
          },
          ...Platform.select({
            ios: {
              tabsStyle: TabBar.Main,
            },
            android: {
              appStyle: TabBar.Main,
            },
          }),
        })
        break
      }
      case 'authorised': {
        Navigation.startTabBasedApp({
          tabs: [
            {
              ...Constants.Screens.FEED_TAB,
            },
            {
              ...Constants.Screens.LIVE_TAB,
            },
            {
              ...Constants.Screens.LEADERBOARD_TAB,
            },
            {
              ...Constants.Screens.PROFILE_TAB,
            },
          ],
          ...Platform.select({
            ios: {
              tabsStyle: TabBar.Main,
            },
            android: {
              appStyle: TabBar.Main,
            },
          }),
        })
        break
      }
      case 'anonymous': {
        Navigation.startTabBasedApp({
          tabs: [
            {
              ...Constants.Screens.FEED_TAB,
            },
            {
              ...Constants.Screens.LIVE_TAB,
            },
            {
              ...Constants.Screens.LEADERBOARD_TAB,
            },
          ],
          ...Platform.select({
            ios: {
              tabsStyle: TabBar.Main,
            },
            android: {
              appStyle: TabBar.Main,
            },
          }),
        })
        break
      }
      default: {
        throw Error('No root specified')
      }
    }
  }
}

export default App
