import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/dev-martos/pilots-f1-fake-json',
})
