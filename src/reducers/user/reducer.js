/**
 * # reducer.js
 * User reducer
 * @flow
 */
'use strict'

import type {UserAction, UserState} from './types'
import * as types from './types'

const initialState = {
  isLoggedIn: false,
  id: null,
  sessionToken: null
}

function user (state: UserState = initialState, action: UserAction) {
  switch (action.type) {
    case types.LOGIN: {
      return {
        ...state,
        isLoggedIn: true
      }
    }
    case types.LOGOUT: {
       return {
        ...state,
        isLoggedIn: false
      }
    }
    default: {
      return state   
    }
  } 
}

export default user