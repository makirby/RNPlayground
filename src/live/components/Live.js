/**
 * # Live.js
 * @flow
 */

import {PageWrapper} from '../../common/rl-content-wrappers'
import React from 'react'

class Live extends React.PureComponent {
  render() {
    return (
      <PageWrapper
        title="Live Screen"
        text="This is the Live screen"
      />
    )
  }
}

export default Live
