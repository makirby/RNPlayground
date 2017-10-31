/**
 * # SplashScreen.js
 * @flow
 */


import NavBar from '../../lib/config/NavBar'
import React from 'react'
import Splash from '../components/Splash'

class SplashScreen extends React.Component {
  static navigatorStyle = NavBar.Default.style
  render() {
    return (
      <Splash />
    )
  }
}

export default SplashScreen
