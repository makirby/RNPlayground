/**
 * # actions.js
 * App navigation actions
 * @flow
 */
'use strict'

import type {NavigationAction} from './types'
import * as types from './types'

export function changeState(newStateKey: string): NavigationAction {
  return {
    type: types.CHANGE_STATE, 
    payload: newStateKey
  }
}
