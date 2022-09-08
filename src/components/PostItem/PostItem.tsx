import { FC } from "react"
import ItemWrapper from "../styles/ItemWrapper.styles"
import PostItemContainer from "../styles/PostItemContainer.style"

interface IPostItem {
  author: string
  companyName: string
  title: string
  description: string
  photo: string
}

const PostItem: FC<IPostItem> = ({ author, companyName, description, photo, title }) => (
  <ItemWrapper>
    <PostItemContainer>
      <div className="post-item-header">
        <img src={photo} alt="companyPhoto" />
        <div className="post-item-info">
          <p>Author: {author}</p>
          <p>Company: {companyName}</p>
        </div>
      </div>
      <div className="post-item-description">
        <p>Title: {title}</p>
        <p>{description}</p>
      </div>
    </PostItemContainer>
  </ItemWrapper>
)

export default PostItem