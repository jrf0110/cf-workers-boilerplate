import test from 'ava'
const makeServiceWorkerEnv = require('service-worker-mock')

function mockGlobal() {
  Object.assign(global, makeServiceWorkerEnv())
}

test('It does a thing', t => {
  t.pass('Yay!')
})
