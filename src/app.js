/**
 * @flow
 */
/* eslint class-methods-use-this: 0 */

import { Navigation } from 'react-native-navigation'
import { Platform } from 'react-native'
import { inject } from 'mobx-react/native'
import { registerScreens } from './registerScreens'
import Constants from './lib/constants'
import Provider from './lib/provider'
import Stores from './lib/stores'
import TabBar from './lib/config/TabBar'

class App {
  props: any;
  store: any;
  constructor(props: any = {}) {
    this.props = props
    this.store = Stores
    registerScreens(this.store, Provider)

    this.startApp('unauthorised')
  }

  startApp(root: string) {
    switch (root) {
      case 'unauthorised': {
        Navigation.startSingleScreenApp({
          screen: {
            ...Constants.Screens.LOGIN_SCREEN,
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
