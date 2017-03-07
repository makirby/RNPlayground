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

const store = configureStore()

function setup () {
  class Root {
    state : {
      isLoading: boolean;
      store: any;
    }
    constructor () {
      this.state = {
        isLoading: true,
        store: configureStore()
      }
    }
  }
  return Root
}

export default setup
