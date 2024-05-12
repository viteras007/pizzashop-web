import { api } from '@/lib/axios.ts'

export interface GetManagerRestaurant {
  id: string
  name: string
  createAt: Date | null
  updateAt: Date | null
  description: string | null
  managerId: string | null
}

export async function getManagerRestaurant() {
  const response = await api.get<GetManagerRestaurant>('/managed-restaurant')

  return response.data
}
