/**
 * @flow
 */

import {action, observable} from 'mobx'

import type {LeaderboardSelectionType} from './types'

class StatisticsStore {
  @observable leaderboards = {};

  @observable selectedBoard: LeaderboardSelectionType = '1v1'

  @action selectBoard(boardKey: LeaderboardSelectionType) {
    this.selectedBoard = boardKey
  }
}

export default new StatisticsStore()
