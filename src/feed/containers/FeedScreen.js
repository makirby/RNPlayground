/**
 * # Feed.js
 * @flow
 */

import { NavigationOptionsComposer } from '../../lib/navigation'
import Feed from '../components/Feed'
import NavBar from '../../lib/config/NavBar'
import React from 'react'

class FeedScreen extends React.PureComponent {
  static get navigationOptions() {
    return NavigationOptionsComposer.default()('Feed')
  }
  render() {
    return <Feed />
  }
}

export default FeedScreen
