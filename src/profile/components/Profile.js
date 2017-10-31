/**
 * # Profile.js
 * @flow
 */

import { RLScrollView } from '../../common/rl-content-wrappers'
import React from 'react'

class Profile extends React.Component {
  render() {
    return (
      <RLScrollView
        title="Profile Screen"
        subtitle="This is the Profile screen"
      />
    )
  }
}

export default Profile
