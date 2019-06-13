import { Router, getErrorPageHTML } from '8track'

const router = new Router()

// Log country middleware
router.all`(.*)`.use(async (ctx, next) => {
  console.log('Country', ctx.request.cf.country)
  return await next()
})

router.get`/`.handle(ctx => ctx.json({ hello: 'world' }))

router.get`/cache-everything/${'path'}`.handle(async ctx => {
  const res = await fetch(`https://my-origin.com/${ctx.params.path}`, {
    cf: {
      cacheEverything: true,
    },
  })

  return ctx.end(res)
})

router.all`(.*)`.handle(ctx => ctx.end('', { status: 404 }))

addEventListener('fetch', e => {
  const res = router.getResponseForRequest(e.request).catch(
    error =>
      new Response(getErrorPageHTML(e.request, error), {
        status: 500,
        headers: {
          'Content-Type': 'text/html',
        },
      }),
  )

  e.respondWith(res as any)
})
