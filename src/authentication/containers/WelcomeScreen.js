/**
 * # WelcomeScreen.js
 * @flow
 */

import NavBar from '../../lib/config/NavBar'
import React from 'react'
import Welcome from '../components/Welcome'

class WelcomeScreen extends React.Component {
  static navigatorStyle = NavBar.Default.style
  render() {
    return (
      <Welcome />
    )
  }
}

export default WelcomeScreen
