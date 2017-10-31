/**
 * #registerScreens
 * @flow
 */

import Navigation from 'react-native-navigation'
import Constants from './lib/constants'
import FeedScreen from './feed/containers/FeedScreen'
import LiveScreen from './live/containers/LiveScreen'
import LoginScreen from './authentication/containers/LoginScreen'
import NewsScreen from './news/containers/NewsScreen'
import ProfileScreen from './profile/containers/ProfileScreen'
import RankingScreen from './statistics/containers/RankingScreen'
import SplashScreen from './authentication/containers/SplashScreen'
import WelcomeScreen from './authentication/containers/WelcomeScreen'

export function registerScreens() {
  Navigation.registerContainer(
    Constants.Screens.FEED_TAB.name,
    () => FeedScreen,
  )
  Navigation.registerContainer(
    Constants.Screens.LIVE_TAB.name,
    () => LiveScreen,
  )
  Navigation.registerContainer(
    Constants.Screens.LEADERBOARD_TAB.name,
    () => RankingScreen,
  )
  Navigation.registerContainer(
    Constants.Screens.PROFILE_TAB.name,
    () => ProfileScreen,
  )
  Navigation.registerContainer(
    Constants.Screens.NEWS_SCREEN.name,
    () => NewsScreen,
  )
  Navigation.registerContainer(
    Constants.Screens.LOGIN_SCREEN.name,
    () => LoginScreen,
  )
  Navigation.registerContainer(
    Constants.Screens.SPLASH_SCREEN.name,
    () => SplashScreen,
  )
  Navigation.registerContainer(
    Constants.Screens.WELCOME_SCREEN.name,
    () => WelcomeScreen,
  )
}
