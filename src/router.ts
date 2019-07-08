import { Router } from '8track'

export function createRouter() {
  const router = new Router()

  // Log country middleware
  router.all`(.*)`.use(async (ctx, next) => {
    if (ctx.request.cf) {
      console.log('Country', ctx.request.cf.country)
    }
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

  return router
}
