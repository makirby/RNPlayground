/**
 * # Leaderboard.js
 * Leaderboard data source
 * @flow
 */

import {observable, action} from 'mobx'

class Store {
  @observable leaderboards = {};

  @observable selectedBoard = 'none'

  @action selectBoard(boardKey: string) {
    this.selectedBoard = boardKey
  }

}

export default new Store()
