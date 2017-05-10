/**
 * @flow
 */

import App from './App'
import Feed from './Feed'
import Leaderboard from './Leaderboard'
import Live from './Live'
import Player from './Player'

const stores = {
  App,
  Feed,
  Leaderboard,
  Live,
  Player
}

// you can hydrate stores here with mobx-persist
// hydrate('Player', stores.Player);

export default {
  ...stores
}
