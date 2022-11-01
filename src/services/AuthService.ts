import client from '../config/config'
import { IAuthParams } from '../types/IAuthParams'
import { IOAuth2Provider } from '../types/IOAuth2Provider'
import { IUser } from '../types/IUserData'

const oAuthMethods = async () => {
  const authMethods = await client.users.listAuthMethods()
  const listItems = []
  for (const provider of authMethods.authProviders) {
    listItems.push(provider)
  }
  return listItems
}

const authViaOAuth = async (provider: IOAuth2Provider) => {
  try {
    const res = await client.users.authViaOAuth2(
      provider.name,
      provider.code,
      provider.codeVerifier,
      provider.redirectUrl
    )

    return res.meta
  } catch (err) {
    throw err
  }
}
const authViaEmail = async (authParams: IAuthParams) => {
  try {
    const res = await client.users.authViaEmail(
      authParams.email,
      authParams.password
    )
    return res
  } catch (err) {
    throw err
  }
}

const logout = async () => {
  try {
    await client.authStore.clear()
    localStorage.removeItem('provider')
    localStorage.removeItem('meta')
  } catch (err) {
    throw err
  }
}
const authRefresh = async () => {
  try {
    const res = await client.users.refresh()
    return res
  } catch (err) {
    throw err
  }
}

const authService = {
  oAuthMethods,
  authViaOAuth,
  authViaEmail,
  logout,
  authRefresh,
}

export default authService
