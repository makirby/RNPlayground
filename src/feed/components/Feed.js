/**
 * # Feed.js
 * @flow
 */

import {RLScrollView} from '../../common/rl-content-wrappers'
import React from 'react'

class Feed extends React.PureComponent {
  render() {
    return (
      <RLScrollView
        title="Feed Screen"
        subtitle="This is the Feed screen"
      />
    )
  }
}

export default Feed
