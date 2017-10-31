/**
 * @flow
 */


const MODAL_LEFT_BUTTON_ID = 'MODAL_LB_1'
const createNavigationOptions = (opts: Object, path?: string) => {

  return {
    title: path,
    largeTitle: path,
    topBarTranslucent: false,
    ...opts,
  }
}

class NavigationOptionsComposer {
  static default(overrides: ?Object) {
    const options = {
      topBarTextColor: 'black',
      // topBarTextFontSize: 16,
      // topBarTextFontFamily: 'HelveticaNeue-Italic',
      ...overrides,
    }
    return (path: string) => createNavigationOptions(options, path)
  }

  static modal(overrides: ?Object) {
    const options = {
      topBarTextColor: 'black',
      // topBarTextFontSize: 16,
      // topBarTextFontFamily: 'HelveticaNeue-Italic',
      leftButtons: [{
        id: MODAL_LEFT_BUTTON_ID,
        testID: MODAL_LEFT_BUTTON_ID,
        title: 'Cancel',
        // buttonColor: 'purple'
      }],
      ...overrides,
    }
    return (path: string) => createNavigationOptions(options, path)
  }
}

export default NavigationOptionsComposer
