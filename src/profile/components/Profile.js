/**
 * # Profile.js
 * @flow
 */

import {PageWrapper} from '../../common/rl-content-wrappers'
import React from 'react'

class Profile extends React.PureComponent {
  render() {
    return (
      <PageWrapper
        title="Profile Screen"
        text="This is the Profile screen"
      />
    )
  }
}

export default Profile
