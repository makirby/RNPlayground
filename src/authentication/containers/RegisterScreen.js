/**
 * # LoginScreen.js
 * @flow
 */

import { PageWrapper } from '../../common/rl-content-wrappers'
import NavBar from '../../lib/config/NavBar'
import React from 'react'
import Register from '../components/Register'

type RegisterScreenProps = {
  navigator: any,
}

class RegisterScreen extends React.Component<RegisterScreenProps> {
  static navigatorStyle = NavBar.Default.style

  render() {
    return (
      <PageWrapper
        title="Register"
        scrollable
      >
        <Register
          navigator={this.props.navigator}
        />
      </PageWrapper>
    )
  }
}

export default RegisterScreen
