/**
 * # News.js
 * @flow
 */

import { PageWrapper } from '../../common/rl-content-wrappers'
import React from 'react'

class News extends React.PureComponent {
  render() {
    return (
      <PageWrapper
        title="News Screen"
        text="This is the News screen"
      />
    )
  }
}

export default News
