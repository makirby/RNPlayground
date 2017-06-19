/**
 * # setup.js
 * Bootstrap mobile application with default values
 * and store
 * @flow
 */

import AppContainer from "./RLApp"
import Constants from "./lib/constants"
import {Navigation} from "react-native-navigation"
import {Platform} from "react-native"
import Provider from "./lib/provider"
import React from "react"
import Stores from "./store"
import TabBar from "./lib/config/TabBar"
import {registerScreens} from "./registerScreens"

function setup() {
  // Bootstrap scenes with mobx store
  registerScreens(Stores, Provider)

  // Start app with react navigation
  Navigation.startTabBasedApp({
    tabs: [
      {
        ...Constants.Screens.FEED_TAB
      },
      {
        ...Constants.Screens.LIVE_TAB
      },
      {
        ...Constants.Screens.PROFILE_TAB
      },
      {
        ...Constants.Screens.LEADERBOARD_TAB
      }
    ],
    ...Platform.select({
      ios: {
        tabsStyle: TabBar.Main
      },
      android: {
        appStyle: TabBar.Main
      }
    })
    // ,
    // drawer: {
    //   left: {
    //     screen: Constants.Screens.DRAWER.screen
    //   },
    //   disableOpenGesture: false
    // }
  })
}

export default setup
