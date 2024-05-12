import { setupWorker } from 'msw/browser'

import { signMock } from '@/api/mocks/sign-in-mock.ts'
import { env } from '@/env.ts'

export const worker = setupWorker(signMock)

export async function enableMSW() {
  if (env.MODE !== 'test') {
    return
  }
  await worker.start()
}
