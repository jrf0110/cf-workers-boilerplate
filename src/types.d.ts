import { KVNamespace } from '@cloudflare/workers-types'

declare global {
  // Declare your KV Namespaces here
  const myKVNamespace: KVNamespace
}
