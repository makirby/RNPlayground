/**
 * # LoginScreen.js
 * @flow
 */

import NavBar from '../../lib/config/NavBar'
import React from 'react'
import Register from '../components/Register'

type RegisterScreenProps = {
  navigator: any,
}

class LoginScreen extends React.Component<RegisterScreenProps> {
  static navigatorStyle = NavBar.Default.style

  render() {
    return (
      <Register
        navigator={this.props.navigator}
      />
    )
  }
}

export default LoginScreen
