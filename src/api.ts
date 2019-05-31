import { Router } from '8track'

const router = new Router()

// Log country middleware
router.all`(.*)`.use(async (ctx, next) => {
  console.log('Country', ctx.request.cf.country)
  return await next()
})

router.get`/`.handle(ctx => ctx.json({ hello: 'world' }))
router.all`(.*)`.handle(ctx => new Response('', { status: 404 }))

addEventListener('fetch', (e: FetchEvent) => {
  // If no response was resolved in the middleware chain, then passthrough
  e.respondWith((async () => (await router.getResponseForRequest(e.request)) || fetch(e.request))())
})
