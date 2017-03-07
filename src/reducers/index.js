/**
 * # index.js
 * Reducer Module
 * @providesModule reducers
 * @flow
 */
'use strict'

import {combineReducers} from 'redux'
import user from './user'
import navigation from './navigation'

user.Reducer

const rootReducer = combineReducers({
  user: user.Reducer,
  navigation: navigation.Reducer
})

export default rootReducer
