/**
 * # FeedStore.js
 * Feed data source
 * @flow
 */

import {action, observable} from 'mobx'

import type {FeedFilterType} from './types'

class FeedStore {
  @observable feedItems = [];

  @observable filters: FeedFilterType = 'default'

  @action changeFilter(filter: FeedFilterType) {
    this.filters = filter
  }
}

export default new FeedStore()
