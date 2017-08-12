/**
 * @flow
 */

import { Account } from './models'

import { action, observable } from 'mobx'
import { persist } from 'mobx-persist'

class AuthenticationStore {
  @persist('object', Account) @observable current = new Account();
  @persist @observable authorized = false;

  @action login = (username: string, password: string) => new Promise((resolve: any, reject: any) => {
    if (username && password) {
      this.authorized = true
      this.current = { username, password }
      resolve({ message: 'success' })
    } else {
      reject({ message: 'Something is wrong with input data :(' })
    }
  });

  @action logout = () => new Promise((resolve: any, reject: any) => {
    this.authorized = false
    this.current = {}

    resolve()
  });
}

export default new AuthenticationStore()
