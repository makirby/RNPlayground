/**
 * @flow
 */

import { Store as Authentication } from '../authentication'
import { Store as Feed } from '../feed'
import { Store as Live } from '../live'
import { Store as Profile } from '../profile'
import { Store as Statistics } from '../statistics'

const stores = {
  Authentication,
  Feed,
  Statistics,
  Live,
  Profile,
}

// you can hydrate stores here with mobx-persist
// hydrate('Player', stores.Player);

export default {
  ...stores,
}
