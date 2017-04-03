/**
 * # Welcome.js
 * @flow
 */

import React from 'react'
import PageWrapper from '../components/RLPageWrapper'

class Welcome extends React.PureComponent {
  render() {
    return (
      <PageWrapper
        title="Welcome Screen"
        text="This is the welcome screen"
      />
    )
  }
}

export default Welcome
