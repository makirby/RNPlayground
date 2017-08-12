/**
 * # LoginScreen.js
 * @flow
 */

import Login from '../components/Login'
import NavBar from '../../lib/config/NavBar'
import React from 'react'

class LoginScreen extends React.PureComponent {
  static navigatorStyle = NavBar.Default.style
  render() {
    return (
      <Login />
    )
  }
}

export default LoginScreen
