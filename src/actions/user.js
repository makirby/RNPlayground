/**
 * # user.js
 * User Actions
 * @flow
 */
'use strict'

export type UserAction = 
  { type: 'LOGGED_IN' }
  | { type: 'LOGGED_OUT' }

function userLogin () : UserAction {
  return {type: 'LOGGED_IN'}
}

function userLogout () : UserAction {
  return {type: 'LOGGED_OUT'}
}