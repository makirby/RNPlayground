/**
 * # LiveScreen.js
 * @flow
 */

import Live from '../components/Live'
import NavBar from '../../lib/config/NavBar'
import React from 'react'

class LiveScreen extends React.Component {
  static navigatorStyle = NavBar.Default.style
  render() {
    return (
      <Live />
    )
  }
}

export default LiveScreen
