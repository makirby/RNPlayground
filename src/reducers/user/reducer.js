/**
 * # user.js
 * User reducer
 * @flow
 */
'use strict'

import type {UserAction, UserState} from './types'
import * as actions from './types'

const initialState = {
  isLoggedIn: false,
  id: null,
  sessionToken: null
}

function user (state: UserState = initialState, action: UserAction) {
  switch (action.type) {
    case actions.LOGIN: {
      return {
        ...state,
        isLoggedIn: true
      }
    }
    case actions.LOGOUT: {
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