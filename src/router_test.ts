const makeServiceWorkerEnv = require('service-worker-mock')
import test from 'ava'
import { createRouter } from './router'

test.beforeEach(() => Object.assign(global, makeServiceWorkerEnv()))

test('It does a thing', async t => {
  const router = createRouter()
  const res = await router.getResponseForRequest(new Request('https://foo.bar/'))

  if (!res) return t.fail('No matching response')

  const body = await res.json()
  t.deepEqual(body, { hello: 'world' })
})
