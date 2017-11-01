/**
 * # Feed.js
 * @flow
 */

import { RLScrollView } from '../../common/rl-content-wrappers'
import React from 'react'

type FeedProps = {

}

class Feed extends React.Component<FeedProps> {
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
