/**
 * # Feed.js
 * @flow
 */

import Feed from '../components/Feed'
import NavBar from '../../lib/config/NavBar'
import React from 'react'

type FeedScreenProps = {

}

class FeedScreen extends React.Component<FeedScreenProps> {
  static navigatorStyle = NavBar.Default.style
  render() {
    return <Feed />
  }
}

export default FeedScreen
