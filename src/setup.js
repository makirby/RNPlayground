/**
 * # setup.js
 * Bootstrap mobile application with default values
 * and store
 * @flow
 */
'use strict'

import React from 'react'
import {Provider} from 'react-redux'
import configureStore from './store/configure'
import AppContainer from './RLAppContainer'

function setup () : ReactClass<{}> {
  class Root extends React.Component {
    state : {
      isLoading: boolean;
      store: any;
    }
    constructor () {
      super()
      this.state = {
        isLoading: true,
        store: configureStore(() => this.setState({isLoading: false}))
      }
    }
    render () {
      if (this.state.isLoading) {
        return null
      }
      return (
        <AppContainer />
      )
    }
  }
  return Root
}

export default setup
