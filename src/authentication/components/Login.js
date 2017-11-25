/**
 * # Login.js
 * @flow
 */

import { Button, Text } from '../../common/rl-style'
import { LoginButton } from 'react-native-fbsdk'
import { TextInput, View } from 'react-native-ui-lib'
import React from 'react'

type LoginProps = {
}

class Login extends React.Component<LoginProps> {
  onLoginFinished = (error, result) => {
    if (error) {
      alert(`Login failed with error: ${result.error}`)
    } else if (result.isCancelled) {
      alert('Login was cancelled')
    } else {
      alert(`Login was successful with permissions: ${result.grantedPermissions}`)
    }
  }

  onLogoutFinished = () => {
    alert('User logged out')
  }

  onPressLogin = () => {

  }

  render() {
    return (
      <View flex marginH-24>
        <View flex-1 centerV>
          <TextInput text50 placeholder="email" />
          <TextInput text50 placeholder="password" secureTextEntry />
          <Button marginB-12 label="Login Now" onPress={this.onPressLogin} />
          <Text center marginB-12>or</Text>
          <View centerH>
            <LoginButton
              onLoginFinished={this.onLoginFinished}
              onLogoutFinished={this.onLogoutFinished}
            />
          </View>
        </View>
      </View>
    )
  }
}

export default Login
