/**
 * # StatsScreen.js
 * @flow
 */

import NavBar from '../../lib/config/NavBar'
import React from 'react'
import Stats from '../components/Stats'

type StatsScreenProps = {

}

class StatsScreen extends React.Component<StatsScreenProps> {
  static navigatorStyle = NavBar.Default.style

  render() {
    return (
      <Stats />
    )
  }
}

export default StatsScreen
