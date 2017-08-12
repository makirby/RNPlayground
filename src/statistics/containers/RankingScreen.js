/**
 * # RankingScreen.js
 * @flow
 */

import NavBar from '../../lib/config/NavBar'
import Ranking from '../components/Ranking'
import React from 'react'


class RankingScreen extends React.PureComponent {
  static navigatorStyle = NavBar.Default.style

  render() {
    return (
      <Ranking />
    )
  }
}

export default RankingScreen
