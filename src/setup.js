/**
 * # setup.js
 * Bootstrap mobile application with default values
 * and store
 * @flow
 */

import React from 'react'
import {Navigation} from 'react-native-navigation'
import Provider from 'src/lib/provider'
import Stores from 'src/store'
import AppContainer from './RLApp'

function setup() {
  class Root extends React.Component {
    state: {
      isLoading: boolean
    };
    
    constructor() {
      super()
      this.state = {
        isLoading: true
      }
    }

  }
  
  return Root
}

export default setup
