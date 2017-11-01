/**
 * # NewsScreen.js
 * @flow
 */

import News from '../components/News'
import React from 'react'

type NewsScreenProps = {

}

class NewsScreen extends React.Component<NewsScreenProps> {
  render() {
    return (
      <News />
    )
  }
}

export default NewsScreen
