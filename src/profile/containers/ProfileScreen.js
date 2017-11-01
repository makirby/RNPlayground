/**
 * # ProfileScreen.js
 * @flow
 */

import NavBar from '../../lib/config/NavBar'
import Profile from '../components/Profile'
import React from 'react'

type ProfileScreenProps = {

}

class ProfileScreen extends React.Component<ProfileScreenProps> {
  static navigatorStyle = NavBar.Default.style

  render() {
    return (
      <Profile />
    )
  }
}

export default ProfileScreen
