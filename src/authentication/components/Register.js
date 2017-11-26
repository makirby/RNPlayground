/**
 * # Register.js
 * @flow
 */

import { Button, Text, TextInput } from '../../common/rl-style'
import { LoginButton } from 'react-native-fbsdk'
import { View } from 'react-native-ui-lib'
import React from 'react'

type RegisterProps = {
  navigator: any,
}

class Register extends React.Component<RegisterProps> {
  onRegisterFinished = (error, result) => {
    if (error) {
      alert(`Login failed with error: ${result.error}`)
    } else if (result.isCancelled) {
      alert('Login was cancelled')
    } else {
      alert(`Login was successful with permissions: ${result.grantedPermissions}`)
    }
  }

  onPressRegister = () => {

  }

  render() {
    return (
      <View flex marginH-24>
        <View flex-1 centerV>
          <TextInput placeholder="name" />
          <TextInput placeholder="email" />
          <TextInput placeholder="password" secureTextEntry />
          <TextInput placeholder="confirm password" secureTextEntry />
          <Button marginB-12 label="Register Now" onPress={this.onPressRegister} />
          <Text center marginB-12>or</Text>
          <View centerH>
            <LoginButton
              onLoginFinished={this.onRegisterFinished}
            />
          </View>
        </View>
      </View>
    )
  }
}

export default Register
