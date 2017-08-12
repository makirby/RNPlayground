/**
 * # Live.js
 * Live data source
 * @flow
 */

import { action, observable } from 'mobx'

class LiveStore {
  @observable liveItems = [];
}

export default new LiveStore()
