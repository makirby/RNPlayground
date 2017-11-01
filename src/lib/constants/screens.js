/**
 * @flow
 */

import Icons from './Icons'

export default {
  DRAWER: {
    screen: 'app.DrawerScreen',
  },
  FEED_TAB: {
    screen: 'app.FeedTabScreen',
    title: 'Feed',
    label: 'Feed',
    icon: Icons.FEED_TAB,
    selectedIcon: Icons.FEED_TAB_SELECTED,
  },
  LIVE_TAB: {
    screen: 'app.LiveTabScreen',
    title: 'Live',
    label: 'Live',
    icon: Icons.LIVE_TAB,
    selectedIcon: Icons.LIVE_TAB_SELECTED,
  },
  LEADERBOARD_TAB: {
    screen: 'app.LeaderboardTabScreen',
    title: 'Leaderboard',
    label: 'Leaderboard',
    icon: Icons.LEADERBOARD_TAB,
    selectedIcon: Icons.LEADERBOARD_TAB_SELECTED,
  },
  PROFILE_TAB: {
    screen: 'app.ProfileTabScreen',
    title: 'Profile',
    label: 'Profile',
    icon: Icons.PROFILE_TAB,
    selectedIcon: Icons.PROFILE_TAB_SELECTED,
  },
  LOGIN_SCREEN: {
    screen: 'app.LoginScreen',
    title: 'Login',
  },
  REGISTER_SCREEN: {
    screen: 'app.RegisterScreen',
    title: 'Register',
  },
  NEWS_SCREEN: {
    screen: 'app.NewsScreen',
    title: 'News',
  },
  WELCOME_SCREEN: {
    screen: 'app.WelcomeScreen',
    title: 'Welcome',
  },
  SPLASH_SCREEN: {
    screen: 'app.SplashScreen',
    title: 'Splash',
  },
  STATS_SCREEN: {
    screen: 'app.StatsScreen',
    title: 'Stats',
  },
  RANKING_SCREEN: {
    screen: 'app.RankingScreen',
    title: 'Ranking',
  },
}
