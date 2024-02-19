import { api } from '../api'

export interface IGetDrivers {
  nome: string
  sobrenome: string
  equipe: string
  pontuacao: number
  foto: string
}

export const getDrivers = async () => {
  try {
    const { data } = await api.get('/drivers')

    return data
  } catch (error) {
    console.error('Deu erro no getDrivers', error)
  }
}
