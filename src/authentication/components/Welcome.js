/**
 * # Welcome.js
 * @flow
 */

import { Button, Text } from '../../common/rl-style'
import { PageWrapper } from '../../common/rl-content-wrappers'
import { View } from 'react-native-ui-lib'
import Constants from '../../lib/constants'
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
          <Button marginB-18 fullWidth label="Register" onPress={this.onPressRegister} />
          <Text center marginB-18>or</Text>
          <Button link marginB-18 label="Continue without login" onPress={this.onPressLogin} />
        </View>
      </PageWrapper>
    )
  }
}

export default Welcome
