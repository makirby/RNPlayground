/**
 * #registerScreens
 * @flow
 */

import { Navigation } from 'react-native-navigation'
import Constants from './lib/constants'
import FeedScreen from './feed/containers/FeedScreen'
import LiveScreen from './live/containers/LiveScreen'
import LoginScreen from './authentication/containers/LoginScreen'
import RegisterScreen from './authentication/containers/RegisterScreen'
import NewsScreen from './news/containers/NewsScreen'
import ProfileScreen from './profile/containers/ProfileScreen'
import RankingScreen from './statistics/containers/RankingScreen'
import SplashScreen from './authentication/containers/SplashScreen'
import WelcomeScreen from './authentication/containers/WelcomeScreen'

export function registerScreens(store: {}, Provider: {}) {
  Navigation.registerComponent(
    Constants.Screens.FEED_TAB.screen,
    () => FeedScreen,
    store,
    Provider,
  )
  Navigation.registerComponent(
    Constants.Screens.LIVE_TAB.screen,
    () => LiveScreen,
    store,
    Provider,
  )
  Navigation.registerComponent(
    Constants.Screens.LEADERBOARD_TAB.screen,
    () => RankingScreen,
    store,
    Provider,
  )
  Navigation.registerComponent(
    Constants.Screens.PROFILE_TAB.screen,
    () => ProfileScreen,
    store,
    Provider,
  )
  Navigation.registerComponent(
    Constants.Screens.NEWS_SCREEN.screen,
    () => NewsScreen,
    store,
    Provider,
  )
  Navigation.registerComponent(
    Constants.Screens.LOGIN_SCREEN.screen,
    () => LoginScreen,
    store,
    Provider,
  )
  Navigation.registerComponent(
    Constants.Screens.REGISTER_SCREEN.screen,
    () => RegisterScreen,
    store,
    Provider,
  )
  Navigation.registerComponent(
    Constants.Screens.SPLASH_SCREEN.screen,
    () => SplashScreen,
    store,
    Provider,
  )
  Navigation.registerComponent(
    Constants.Screens.WELCOME_SCREEN.screen,
    () => WelcomeScreen,
    store,
    Provider,
  )
}

export const openLoginModalIn = (
  navigator: { showModal: Function },
  withCancelButton: boolean = true,
) => {
  navigator.showModal({
    ...Constants.Screens.LOGIN_SCREEN,
    passProps: { withCancelButton },
    overrideBackPress: true, // [Android] if you want to prevent closing a modal by pressing back button in Android
  })
}
