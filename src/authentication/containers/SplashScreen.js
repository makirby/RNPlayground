/**
 * # SplashScreen.js
 * @flow
 */


import NavBar from '../../lib/config/NavBar'
import React from 'react'
import Splash from '../components/Splash'

type SplashScreenProps = {

}

class SplashScreen extends React.Component<SplashScreenProps> {
  static navigatorStyle = NavBar.Default.style
  render() {
    return (
      <Splash />
    )
  }
}

export default SplashScreen
