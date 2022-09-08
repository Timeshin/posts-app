import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IPosts, IPostsState } from "../reducersTypes/postsReducerTypes"
import postsApi from "src/services/postsApi"

const initialState: IPostsState = {
  posts: [],
  loading: false,
  error: '',
}

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},

  extraReducers: {
    [postsApi.getPosts.fulfilled.type]: (state, action: PayloadAction<IPosts[]>) => {
        state.posts = action.payload
        state.loading = false
        state.error = ""
    },

    [postsApi.getPosts.pending.type]: (state) => {
        state.loading = true
    },

    [postsApi.getPosts.rejected.type]: (state, action: PayloadAction<string>) => {
        state.loading = false
        state.error = action.payload
    },
}
})

const { reducer } = postsSlice

export default reducer
