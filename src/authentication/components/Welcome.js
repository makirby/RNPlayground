/**
 * # Welcome.js
 * @flow
 */

import { Button, Text } from '../../common/rl-style'
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
        ...Constants.Screens.LOGIN_SCREEN,
      },
    )
  }

  onPressRegister = () => {
    this.props.navigator.push(
      {
        ...Constants.Screens.REGISTER_SCREEN,
      },
    )
  }

  render() {
    return (
      <View flex bottom>
        <Button fullWidth marginB-6 label="Login" onPress={this.onPressLogin} />
        <Button marginB-18 fullWidth label="Register" onPress={this.onPressRegister} />
        <Text center marginB-18>or</Text>
        <Button link marginB-18 label="Continue without login" onPress={this.onPressLogin} />
      </View>
    )
  }
}

export default Welcome
