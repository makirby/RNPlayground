/**
 * # Live.js
 * Live data source
 * @flow
 */

import {observable, action} from 'mobx'

class Store {
  @observable liveItems = [];

}

export default new Store()
