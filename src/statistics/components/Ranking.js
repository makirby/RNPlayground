/**
 * # Ranking.js
 * @flow
 */

import { RLScrollView } from '../../common/rl-content-wrappers'
import React from 'react'

type RankingProps = {}

class Ranking extends React.Component<RankingProps> {
  render() {
    return (
      <RLScrollView
        title="Ranking Screen"
        subtitle="This is the Ranking screen"
      />
    )
  }
}

export default Ranking
