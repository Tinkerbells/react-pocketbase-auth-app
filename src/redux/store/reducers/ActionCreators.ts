import { createAsyncThunk } from '@reduxjs/toolkit'
import { IAuthParams } from '../../../types/IAuthParams'
import { IOAuth2Provider } from '../../../types/IOAuth2Provider'
import client from '../../../config/config'

export const getOAuthProviders = createAsyncThunk(
  'auth/oAuthProviders',
  async (_, { rejectWithValue }) => {
    try {
      const authMethods = await client.users.listAuthMethods()
      const listItems = []
      for (const provider of authMethods.authProviders) {
        listItems.push(provider)
      }
      return listItems
    } catch (err) {
      return rejectWithValue("Can't find providers")
    }
  }
)

