/**
 * # user.js
 * User Actions
 * @flow
 */
'use strict'

import type {UserAction} from './types'
import * as types from './types'

function logIn () : UserAction {
  return {type: types.LOGIN}
}

function logout () : UserAction {
  return {type: types.LOGOUT}
}

export default {logIn, logout}
