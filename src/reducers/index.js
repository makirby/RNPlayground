/**
 * # index.js
 * Reducer Module
 * @providesModule reducers
 * @flow
 */
'use strict'

import {combineReducers} from 'redux'
import userReducer from './user/reducer'

const rootReducer = combineReducers({
  userReducer
})

export default rootReducer