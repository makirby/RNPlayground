/**
 * # RankingScreen.js
 * @flow
 */

import { NavigationOptionsComposer } from '../../lib/navigation'
import NavBar from '../../lib/config/NavBar'
import Ranking from '../components/Ranking'
import React from 'react'


class RankingScreen extends React.PureComponent {
  static get navigationOptions() {
    return NavigationOptionsComposer.default()('Ranking')
  }

  render() {
    return (
      <Ranking />
    )
  }
}

export default RankingScreen
