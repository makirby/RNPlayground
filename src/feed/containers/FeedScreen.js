/**
 * # Feed.js
 * @flow
 */

import Feed from "../components/Feed"
import NavBar from "../../lib/config/NavBar"
import React from "react"

class FeedScreen extends React.PureComponent {
  static navigatorStyle = NavBar.Default.style
  render() {
    return <Feed />
  }
}

export default FeedScreen
