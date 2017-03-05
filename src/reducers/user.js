/**
 * # user.js
 * User reducer
 * @flow
 */

import type {UserAction} from '../actions/user'

export type UserState = {
  isLoggedIn: boolean;
  id: ?string;
  sessionToken: ?string;
}

const initialState = {
  isLoggedIn: false,
  id: null,
  sessionToken: null
}

function user (state: UserState = initialState, action: UserAction) {

  switch (action.type) {
    case 'LOGGED_IN': {
      return {
        ...state,
        isLoggedIn: true
      }
    }
    case 'LOGGED_OUT': {
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
