/**
 * # types.js
 * Navigation types
 * @flow
 */
'use strict'

export const CHANGE_STATE = 'rlmobile.navigation.CHANGE_STATE'

export type NavigationAction = 
  { type: 'rlmobile.navigation.CHANGE_STATE', payload: string }

export type NavigationState = {
  state: ?string;
}

