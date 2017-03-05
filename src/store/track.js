/**
 * # track.js
 * @flow
 */
'use strict'

import type {Action} from '../actions/types'

function track (action: Action): void {
  switch (action.type) {
    default: {
      // log
    }
  }
}

export default track
