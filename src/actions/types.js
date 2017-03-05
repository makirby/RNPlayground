/**
 * #types.js
 * Applicaiton action types
 * @flow
 */
'use strict'

import type {UserAction} from './user'

export type Action = UserAction

export type Dispatch = (action: Action | ThunkAction | PromiseAction | Array<Action>) => any;
export type GetState = () => Object;
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
export type PromiseAction = Promise<Action>;
