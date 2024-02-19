import { api } from '../api'

export const getDrivers = async () => {
  try {
    const { data } = await api.get('/drivers')

    return data
  } catch (error) {
    console.error('Deu erro no getDrivers', error)
  }
}
