/**
 * # Splash.js
 * @flow
 */

import React from 'react'
import {PageWrapper} from 'src/common/rl-content-wrappers'

class Splash extends React.PureComponent {
  render() {
    return (
      <PageWrapper
        title="Splash Screen"
        text="Loading Application"
      />
    )
  }
}

export default Splash
