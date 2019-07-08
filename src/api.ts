import { getErrorPageHTML } from '8track'
import { createRouter } from './router'

const router = createRouter()

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
