import { http, HttpResponse } from 'msw'

export const signMock = http.post('/authenticate', () => {
  return new HttpResponse(null, { status: 401 })
})
