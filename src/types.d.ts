declare function addEventListener(
  type: 'fetch',
  handler: (event: FetchEvent) => void,
): undefined | null | Response | Promise<Response>
