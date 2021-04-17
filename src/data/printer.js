import * as API from './api'
import Cookies from 'js-cookie'

export default class Printer {
  constructor ({ name, connection }) {
    Object.assign(this, { name, connection })
  }

  getStatus () {
    return API.request('get', 'printer')
  }

  connect () {
  	// TODO
  }

  save () {
  	Cookies.set(`PRINTER_${this.name}`, JSON.stringify(this.connection))
  }

  static load (name) {
    try {
      const connection = JSON.parse(Cookies.get(`PRINTER_${name}`))
      return new Printer({ name, connection })
    } catch (error) {
      console.error(error)
      return undefined
    }
  }
}