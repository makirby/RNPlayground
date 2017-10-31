/**
 * # ProfileScreen.js
 * @flow
 */

import NavBar from '../../lib/config/NavBar'
import Profile from '../components/Profile'
import React from 'react'

class ProfileScreen extends React.Component {
  static navigatorStyle = NavBar.Default.style

  render() {
    return (
      <Profile />
    )
  }
}

export default ProfileScreen
