/**
 * # WelcomeScreen.js
 * @flow
 */

import { PageWrapper } from '../../common/rl-content-wrappers'
import NavBar from '../../lib/config/NavBar'
import React from 'react'
import Welcome from '../components/Welcome'


type WelcomeScreenProps = {
  navigator: any,
}

class WelcomeScreen extends React.Component<WelcomeScreenProps> {
  static navigatorStyle = {
    ...NavBar.Default.style,
    navBarHidden: true,
  }

  render() {
    return (
      <PageWrapper
        title="Welcome"
        text="This is the welcome screen"
      >
        <Welcome
          navigator={this.props.navigator}
        />
      </PageWrapper>
    )
  }
}

export default WelcomeScreen
