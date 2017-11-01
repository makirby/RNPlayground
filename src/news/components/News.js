/**
 * # News.js
 * @flow
 */

import { PageWrapper } from '../../common/rl-content-wrappers'
import NavBar from '../../lib/config/NavBar'
import React from 'react'

type NewsProps = {

}

class News extends React.Component<NewsProps> {
  static navigatorStyle = NavBar.Default.style
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
