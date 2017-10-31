/**
 * # setup.js
 * Bootstrap mobile application with default values
 * and store
 * @flow
 */

import Navigation from 'react-native-navigation'
import { Platform } from 'react-native'
import { openLoginModalIn, registerScreens } from './registerScreens'
import Constants from './lib/constants'
import Provider from './lib/provider'
import Stores from './lib/stores'
import TabBar from './lib/config/TabBar'


Navigation.events().onAppLaunched(() => {
  registerScreens()
  // Bootstrap scenes with mobx store
  // Navigation.setRoot({
  //   container: {
  //     name: Constants.Screens.WELCOME_SCREEN.name
  //   }
  // });

  Navigation.setRoot({
    bottomTabs: [
      {
        container: {
          name: Constants.Screens.FEED_TAB.name,
          // navigationOptions: {
          //   icon: Constants.Screens.FEED_TAB.icon,
          // },
        },
      },
      {
        container: {
          name: Constants.Screens.LIVE_TAB.name,
        },
      },
      {
        container: {
          name: Constants.Screens.LEADERBOARD_TAB.name,
        },
      },
      {
        container: {
          name: Constants.Screens.PROFILE_TAB.name,
        },
      },
    ],
  })
})

