/**
 * # ProfileScreen.js
 * @flow
 */

import { NavigationOptionsComposer } from '../../lib/navigation'
import NavBar from '../../lib/config/NavBar'
import Profile from '../components/Profile'
import React from 'react'

class ProfileScreen extends React.PureComponent {
  static get navigationOptions() {
    return NavigationOptionsComposer.default()('Profile')
  }

  render() {
    return (
      <Profile />
    )
  }
}

export default ProfileScreen
