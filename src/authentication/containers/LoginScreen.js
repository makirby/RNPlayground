/**
 * # LoginScreen.js
 * @flow
 */

import Login from '../components/Login'
import NavBar from '../../lib/config/NavBar'
import React from 'react'

type LoginScreenProps = {

}

class LoginScreen extends React.Component<LoginScreenProps> {
  static navigatorStyle = NavBar.Default.style
  render() {
    return (
      <Login />
    )
  }
}

export default LoginScreen
