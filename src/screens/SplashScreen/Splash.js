/**
 * # Splash Screen
 * @flow
 */
'use strict'

import React from 'react'
import PageWrapper from '../../components/RLPageWrapper'

class Splash extends React.PureComponent {
  render () {
    return (
    <PageWrapper 
      title='Splash Screen'
      text='Loading Application'/>
    )
  }
}

export default Splash
