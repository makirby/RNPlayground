/**
 * # Welcome.js
 * @flow
 */

import { PageWrapper } from '../../common/rl-content-wrappers'
import React from 'react'

class Welcome extends React.Component {
  render() {
    return (
      <PageWrapper
        title="Welcome Screen"
        text="This is the welcome screen"
      />
    )
  }
}

export default Welcome
