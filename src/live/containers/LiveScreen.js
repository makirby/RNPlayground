/**
 * # LiveScreen.js
 * @flow
 */

import { NavigationOptionsComposer } from '../../lib/navigation'
import Live from '../components/Live'
import NavBar from '../../lib/config/NavBar'
import React from 'react'

class LiveScreen extends React.PureComponent {
  static get navigationOptions() {
    return NavigationOptionsComposer.default()('Live')
  }

  render() {
    return (
      <Live />
    )
  }
}

export default LiveScreen
