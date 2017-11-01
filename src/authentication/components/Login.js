/**
 * # Login.js
 * @flow
 */

import { PageWrapper } from '../../common/rl-content-wrappers'
import React from 'react'

type LoginProps = {

}

class Login extends React.Component<LoginProps> {
  render() {
    return (
      <PageWrapper
        title="Login Screen"
        text="This is the Login screen"
      />
    )
  }
}

export default Login
