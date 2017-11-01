/**
 * # Stats.js
 * @flow
 */

import { PageWrapper } from '../../common/rl-content-wrappers'
import React from 'react'

type StatsProps = {}

class Stats extends React.Component<StatsProps> {
  render() {
    return (
      <PageWrapper
        title="Stats Screen"
        text="This is the Stats screen"
      />
    )
  }
}

export default Stats
