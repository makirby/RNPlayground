/**
 * # Splash.js
 * @flow
 */

import {PageWrapper} from '../../common/rl-content-wrappers'
import React from 'react'

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
