/**
 * # LoginScreen.js
 * @flow
 */

import { PageWrapper } from '../../common/rl-content-wrappers'
import Login from '../components/Login'
import NavBar from '../../lib/config/NavBar'
import React from 'react'

type LoginScreenProps = {
  navigator: any,
}

class LoginScreen extends React.Component<LoginScreenProps> {
  static navigatorStyle = NavBar.Default.style
  render() {
    return (
      <PageWrapper
        title="Login"
      >
        <Login />
      </PageWrapper>
    )
  }
}

export default LoginScreen
