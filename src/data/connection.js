import * as API from './api'

export const connectionOptions = async () => {
  const connection = await API.request('get', 'connection')
  return connection.options
}

export const connect = async ({ port, baudrate, printerProfile }) => {
  return await API.request('post', 'connection', { command: 'connect', port, baudrate, printerProfile })
}