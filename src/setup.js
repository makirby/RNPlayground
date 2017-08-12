/**
 * # setup.js
 * Bootstrap mobile application with default values
 * and store
 * @flow
 */

import { Navigation } from 'react-native-navigation'
import { Platform } from 'react-native'
import { openLoginModalIn, registerScreens } from './registerScreens'
import Constants from './lib/constants'
import Provider from './lib/provider'
import Stores from './lib/stores'
import TabBar from './lib/config/TabBar'


// Bootstrap scenes with mobx store
registerScreens(Stores, Provider)

// Start app with react navigation
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
      appStyle: {
        statusBarTextColorScheme: 'dark',
        ...TabBar.Main,
      },
    },
  }),
})
