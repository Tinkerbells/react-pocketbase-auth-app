import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IAuthParams } from '../../../types/IAuthParams'
import { IMeta } from '../../../types/IMeta'
import { IOAuth2Provider } from '../../../types/IOAuth2Provider'
import { IUser } from '../../../types/IUserData'
import { getOAuthProviders } from './ActionCreators'

interface UserState {
  user: IUser | null
  meta: IMeta | null
  loading: boolean
  error: string | null
  authProviders: IOAuth2Provider[]
}

const initialState: UserState = {
  user: null,
  meta: null,
  loading: false,
  error: null,
  authProviders: [],
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state) => {
      let meta =
        localStorage.getItem('meta') !== null
          ? JSON.parse(localStorage.getItem('meta') as string)
          : null
      let user =
        localStorage.getItem('pocketbase_auth') !== null
          ? JSON.parse(localStorage.getItem('pocketbase_auth') as string)
          : null
      state.user = user?.model
      state.meta = meta
    },
  },
  extraReducers: {
    [getOAuthProviders.pending.type]: (state) => {
      state.loading = true
    },
    [getOAuthProviders.fulfilled.type]: (
      state,
      action: PayloadAction<IOAuth2Provider[]>
    ) => {
      state.loading = false
      state.authProviders = action.payload
    },
    [getOAuthProviders.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.loading = false
      state.error = action.payload
    },
  },
})
export const { setUser } = authSlice.actions
export default authSlice.reducer
