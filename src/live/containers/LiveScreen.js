/**
 * # LiveScreen.js
 * @flow
 */

import Live from '../components/Live'
import NavBar from '../../lib/config/NavBar'
import React from 'react'

type LiveScreenProps = {

}

class LiveScreen extends React.Component<LiveScreenProps> {
  static navigatorStyle = NavBar.Default.style
  render() {
    return (
      <Live />
    )
  }
}

export default LiveScreen
