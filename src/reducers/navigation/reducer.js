/**
 * # reducer.js
 * Navigation reducer
 * @flow
 */
'use strict'

import type {NavigationAction, NavigationState} from './types'
import * as types from './types'

const initialState = {
  state: null
}

function navigation (state: NavigationState = initialState, action: NavigationAction): NavigationState {
  switch(action.type) {
    case types.CHANGE_STATE: {
      return {
        ...state, 
        state: action.payload
      }
    }
    default: {
      return state
    }
  }
}

export default navigation