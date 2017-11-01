/**
 * # Splash.js
 * @flow
 */

import { PageWrapper } from '../../common/rl-content-wrappers'
import React from 'react'

type SplashProps = {

}

class Splash extends React.Component<SplashProps> {
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
