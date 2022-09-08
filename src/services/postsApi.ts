import { createAsyncThunk } from "@reduxjs/toolkit"
import { IPostDescription, IPostPhoto, IPosts } from "src/redux/reducersTypes/postsReducerTypes"
import authInstance from "./baseUrl"

const postsApi = {
  getPosts: createAsyncThunk(
    "posts/getPosts",
    async () => {
      const postsResponse = await authInstance.get<IPosts[]>('/users')
      const response = await Promise.all(
        postsResponse.data.map(async (post) => {
          const postDescriptionResponse = await authInstance.get<IPostDescription>(`/posts/${post.id}`)
          const postPhotosResponse = await authInstance.get<IPostPhoto>(`/photos/${post.id}`)
          return {
            ...post,
            description: postDescriptionResponse.data,
            photo: postPhotosResponse.data
          }
        })
      )
      
      return response
    }
  )
}

export default postsApi
