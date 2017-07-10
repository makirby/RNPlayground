/**
 * # Live.js
 * @flow
 */

import {RLScrollView} from '../../common/rl-content-wrappers'
import React from 'react'

class Live extends React.PureComponent {
  render() {
    return (
      <RLScrollView
        title="Live Screen"
        subtitle="This is the Live screen"
      />
    )
  }
}

export default Live
