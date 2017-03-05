/**
 * # configure.js
 * @flow
 */
'use strict'

import {applyMiddleware, createStore} from 'redux'
import {persistStore, autoRehydrate} from 'redux-persist'
import {AsyncStorage} from 'react-native'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import analytics from './analytics'
import reducers from '../reducers'

let isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent

let logger = createLogger({
  predicate: (getstate, action) => isDebuggingInChrome,
  collapsed: true,
  duration: true
})

let createApplicationStore = applyMiddleware(thunk, analytics, logger)(createStore)


function configureStore (onComplete: ?() => void) {
  const store = autoRehydrate()(createApplicationStore)(reducers)
  persistStore(store, {storage: AsyncStorage}, onComplete)
  if (isDebuggingInChrome) {
    window.store = store
  }

  return store
}

export default configureStore
