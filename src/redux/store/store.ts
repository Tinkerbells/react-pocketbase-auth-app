import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authReducer from './reducers/AuthSlice'

const rootReducer = combineReducers({
  auth: authReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware({
        serializableCheck: false,
      })
    },
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
