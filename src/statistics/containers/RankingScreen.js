/**
 * # RankingScreen.js
 * @flow
 */

import NavBar from '../../lib/config/NavBar'
import Ranking from '../components/Ranking'
import React from 'react'

type RankingScreenProps = {

}

class RankingScreen extends React.Component<RankingScreenProps> {
  static navigatorStyle = NavBar.Default.style

  render() {
    return (
      <Ranking />
    )
  }
}

export default RankingScreen
