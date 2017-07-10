/**
 * # Ranking.js
 * @flow
 */

import {RLScrollView} from '../../common/rl-content-wrappers'
import React from 'react'

class Ranking extends React.PureComponent {
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
