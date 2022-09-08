import { configureStore } from '@reduxjs/toolkit'
import { userReducer, postsReducer } from './'

export const store = configureStore({
  reducer: {
    userReducer,
    postsReducer
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
