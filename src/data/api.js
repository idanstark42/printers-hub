import Cookies from 'js-cookie'
import axios from 'axios'

import config from '../config'

const API_KEY_COOKIE = 'X-Api-Key'
const API_KEY_HEADER = 'X-Api-Key'

let _loggedIn = false

export const init = () => {
	const savedApiKey = Cookies.get(API_KEY_COOKIE)
	if (savedApiKey) {
		login(savedApiKey)
	}
}

export const loggedIn = () => _loggedIn

export const login = apiKey => {
  axios.defaults.headers.common[API_KEY_HEADER] = apiKey
  Cookies.set(API_KEY_COOKIE, apiKey)
	this._loggedIn = true
}

export const logout = () => {
	axios.defaults.headers.common[API_KEY_HEADER] = undefined
  Cookies.set(API_KEY_COOKIE, undefined)
	this._loggedIn = false
}

export const request = (method, action, data) => {
  return axios(`${config.api}/${action}`, { method, data })
}
