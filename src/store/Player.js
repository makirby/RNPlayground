/**
 * # Player.js
 * Player data source
 * @flow
 */

import {observable, action} from 'mobx'

class Store {
  @observable name = '';

  @action editName(name: string) {
    this.name = name
  }

}

export default new Store()
