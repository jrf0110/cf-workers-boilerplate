declare function addEventListener(
  type: 'fetch',
  handler: (event: FetchEvent) => void,
): undefined | null | Response | Promise<Response>

interface Request {
  cf: {
    tlsVersion: string
    tlsCipher: string
    country: string
    colo: string
    tlsClientAuth: {
      certIssuerDNLegacy: string
      certIssuerDN: string
      certPresented: string // "0" or "1"
      certSubjectDNLegacy: string
      certSubjectDN: string
      certNotBefore: string // In format "Dec 22 19:39:00 2018 GMT"
      certNotAfter: string // In format "Dec 22 19:39:00 2018 GMT"
      certSerial: string
      certFingerprintSHA1: string
      certVerified: string // “SUCCESS”, “FAILED:reason”, “NONE”
    }
  }
}
