/**
 * #RLService.js
 * Service consumer
 * @flow
 */

import { MessageHandler } from '~/common/status-bar'
import environment from '~/env'

export type FetchOptions = {
  method: 'GET' | 'PUT' | 'POST' | 'PATCH';
  url: string;
  body?: Object;
  callback?: () => void;
}

export type ReqOpts = {
  method: 'GET' | 'PUT' | 'POST' | 'PATCH';
  headers: Object;
  body: ?string;
}

class RLService {
  _baseUrl: string
  _sessionToken: ?string

  constructor() {
    this.initialise(environment)
  }

  initialise(env: Object) {
    this._baseUrl = env.serverUrl
  }

  setToken(token: string) {
    this._sessionToken = token
  }

  clearToken() {
    this._sessionToken = undefined
  }

  async fetch(req: FetchOptions) {
    const opts = {
      method: 'GET',
      ...req,
    }

    const reqOpts: ReqOpts = {
      method: opts.method,
      headers: {},
      body: null,
    }

    if (this._sessionToken) {
      reqOpts.headers.Authorization = `bearer ${this._sessionToken}`
    }

    if (opts.method === 'POST' || opts.method === 'PUT') {
      reqOpts.headers.Accept = 'application/json'
      reqOpts.headers['Content-Type'] = 'application/json'
    }

    if (opts.body) {
      reqOpts.body = JSON.stringify(opts.body)
    }

    const request = this._baseUrl + opts.url

    return fetch(request, reqOpts).then(response =>
      response.json().then(json => ({
        ok: response.ok,
        status: response.status,
        json,
      }),
      )).then(
      // Both fetching and parsing succeeded!
      ({ ok, status, json }) => {
        if (ok === true) {
          // OK response
          return json
        }
        if (status === 401 || status === 403) {
          MessageHandler.createPresetMessage('Unauthorised')
        }
        // Status not OK
        return Promise.reject(new Error(`code: ${status.toString()} ${json}`))
      },
      // Either fetching or parsing failed! (rejected)
      (err: Error) => {
        throw err
      })
  }
}

const amigoService = new RLService()

export default amigoService
