import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState = {
  isLogined: false,
  login: 'login',
  password: '123',
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
      setLoginUser: (state, action: PayloadAction<boolean>) => {
        state.isLogined = action.payload
      },
  },
})

const { actions, reducer } = userSlice

export const { setLoginUser } = actions

export default reducer
