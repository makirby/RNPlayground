/**
 * # Player.js
 * Player data source
 * @flow
 */

import {action, observable} from 'mobx'

class ProfileStore {
  @observable name: string = '';

  @action editName(name: string) {
    this.name = name
  }
}

export default new ProfileStore()
