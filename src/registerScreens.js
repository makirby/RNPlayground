/**
 * #registerScreens
 * @flow
 */

import {Navigation} from 'react-native-navigation'

import Constants from 'src/lib/constants'

import RankingScreen from 'src/statistics/containers/RankingScreen'
import FeedScreen from 'src/feed/containers/FeedScreen'
import ProfileModal from 'src/profile/containers/ProfileScreen'
import LiveScreen from 'src/live/containers/LiveScreen'
import NewsScreen from 'src/news/containers/NewsScreen'
import LoginScreen from 'src/authentication/containers/LoginScreen'
import SplashScreen from 'src/authentication/containers/SplashScreen'
import WelcomeScreen from 'src/authentication/containers/WelcomeScreen'

export function registerScreens(store: {}, Provider: {}) {
  Navigation.registerComponent(Constants.Screens.FEED_TAB.screen, () => FeedScreen, store, Provider)
  Navigation.registerComponent(Constants.Screens.LIVE_TAB.screen, () => LiveScreen, store, Provider)
  Navigation.registerComponent(Constants.Screens.LEADERBOARD_TAB.screen, () => RankingScreen, store, Provider)
  Navigation.registerComponent(Constants.Screens.PROFILE_TAB.screen, () => ProfileModal, store, Provider)
  Navigation.registerComponent(Constants.Screens.NEWS_SCREEN.screen, () => NewsScreen, store, Provider)
  Navigation.registerComponent(Constants.Screens.LOGIN_SCREEN.screen, () => LoginScreen, store, Provider)
  Navigation.registerComponent(Constants.Screens.SPLASH_SCREEN.screen, () => SplashScreen, store, Provider)
  Navigation.registerComponent(Constants.Screens.WELCOME_SCREEN.screen, () => WelcomeScreen, store, Provider)
}
