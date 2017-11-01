/**
 * # Welcome.js
 * @flow
 */

import { Button } from '../../common/rl-style'
import Constants from '../../lib/constants'
import { PageWrapper } from '../../common/rl-content-wrappers'
import { View } from 'react-native-ui-lib'
import React from 'react'

type WelcomeProps = {
  navigator: any,
}

class Welcome extends React.Component<WelcomeProps> {

  onPressLogin = () => {
    this.props.navigator.push(
      {
        screen: Constants.Screens.LOGIN_SCREEN.screen,
      },
    )
  }

  onPressRegister = () => {
    this.props.navigator.push(
      {
        screen: Constants.Screens.REGISTER_SCREEN.screen,
      },
    )
  }

  render() {
    return (
      <PageWrapper
        title="Welcome"
        text="This is the welcome screen"
      >
        <View flex bottom>
          <Button fullWidth marginB-6 label="Login" onPress={this.onPressLogin} />
          <Button background-orange30 marginB-12 fullWidth label="Register" onPress={this.onPressRegister} />
        </View>
      </PageWrapper>
    )
  }
}

export default Welcome
