/**
 * # analytics.js
 *
 */

import track from './track'

const analytics = (store) => (next) => (action) => {
  track(action)
  return next(action)
}

export default analytics
