export interface IOAuth2Provider {
  name: string
  state: string
  codeVerifier: string
  code: string
  authUrl: string
  redirectUrl: string
}
