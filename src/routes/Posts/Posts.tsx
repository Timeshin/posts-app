import { useEffect } from "react"
import { PostItem } from "src/components"
import { useAppDispatch, useAppSelector } from "src/hooks"
import postsApi from "src/services/postsApi"

const Posts = () => {
  const dispatch = useAppDispatch()
  const { posts, loading } = useAppSelector(({ postsReducer }) => postsReducer)

  useEffect(() => {
    dispatch(postsApi.getPosts())
  }, [dispatch])

  if(loading) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      {posts &&
        posts.map(({ id, name, company, description, photo }) =>
          <PostItem
            key={id}
            author={name}
            companyName={company.name}
            title={description?.title || ''}
            description={description?.body || ''}
            photo={photo?.thumbnailUrl || ''}
          />
        )
      }
    </>
  )
}

export default Posts