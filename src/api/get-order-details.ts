import { api } from '@/lib/axios'

export interface GetOrderDetailsParams {
  orderId: string
}
export interface GetORderDetailsResponse {
  id: string
  createdAt: Date
  status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
  totalInCents: number
  customer: {
    name: string
    email: string
    phone: string | null
  }
  orderItems: {
    id: string
    priceInCents: number
    quantity: number
    product: {
      name: string
    }
  }[]
}

export async function getOrderDetails({ orderId }: GetOrderDetailsParams) {
  const response = await api.get<GetORderDetailsResponse>(`/orders/${orderId}`)

  return response.data
}
