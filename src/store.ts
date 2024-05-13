import { configureStore } from '@reduxjs/toolkit'
import authSlice from './views/auth/auth.slice'

const store = configureStore({
  reducer: {
    auth: authSlice
  },
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch