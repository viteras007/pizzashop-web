import { api } from '@/lib/axios.ts'

interface UpdateProfileBody {
  name: string
  description: string | null
}

export async function updateProfile({ name, description }: UpdateProfileBody) {
  const response = await api.put<UpdateProfileBody>('/profile', {
    name,
    description,
  })

  return response.data
}
