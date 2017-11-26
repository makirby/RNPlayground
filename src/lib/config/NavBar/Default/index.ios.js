/**
 * @flow
 */

// [more info] - https://wix.github.io/react-native-navigation/#/styling-the-navigator
const style = {
  navBarTextColor: '#222222',
  navBarBackgroundColor: '#ffffff',
  navBarButtonColor: '#007aff',
  screenBackgroundColor: '#ffffff',

  // statusBarTextColorScheme : Constants.Colors.statusBarColor,
  // make sure that in Xcode > project > Info.plist, the property View controller-based status bar appearance is set to YES
}

const buttons = {

}

export default {
  style,
  buttons,
  drawUnderNavBar: true,
  navBarTranslucent: true,
}
