/**
 * # types.js
 * User Types
 * @flow
 */
'use strict'

export const LOGIN = 'rlmobile.user.LOGIN'
export const LOGOUT = 'rlmobile.user.LOGOUT'

export type UserAction = 
  { type: 'rlmobile.user.LOGIN' }
  | { type: 'rlmobile.user.LOGOUT' }

export type UserState = {
  isLoggedIn: boolean;
  id: ?string;
  sessionToken: ?string;
}

