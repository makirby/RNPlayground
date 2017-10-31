/**
 * # StatsScreen.js
 * @flow
 */

import { NavigationOptionsComposer } from '../../lib/navigation'
import NavBar from '../../lib/config/NavBar'
import React from 'react'
import Stats from '../components/Stats'

class StatsScreen extends React.PureComponent {
  static get navigationOptions() {
    return NavigationOptionsComposer.default()('Stats')
  }

  render() {
    return (
      <Stats />
    )
  }
}

export default StatsScreen
