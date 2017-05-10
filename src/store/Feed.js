/**
 * # Feed.js
 * Feed data source
 * @flow
 */

import {observable, action} from 'mobx'

type FilterType = 'default' | 'rlcs';

class Store {
  @observable feedItems = [];

  @observable filters: FilterType = 'default'

  @action changeFilter(filter: FilterType) {
    this.filters = filter
  }

}

export default new Store()
