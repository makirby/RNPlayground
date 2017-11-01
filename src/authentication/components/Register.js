/**
 * # Login.js
 * @flow
 */

import { PageWrapper } from '../../common/rl-content-wrappers'
import React from 'react'

type RegisterProps = {
  navigator: any,
}

class Register extends React.Component<RegisterProps> {
  render() {
    return (
      <PageWrapper
        title="Registration Screen"
        text="This is the Registration screen"
      />
    )
  }
}

export default Register
