import styled from "styled-components";

const PostItemContainer = styled.div`
  width: 100%;
  height: 320px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: hidden;

  .post-item-header {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 30px;
    
    .post-item-info {
      display: flex;
      flex-direction: column;
      gap: 20px;

      p {
        width: 220px;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }

  .post-item-description {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }

  @media ${({ theme }) => theme.sizes.tablet} {
    gap: 10px;

    .post-item-header {
      .post-item-info {
        gap: 10px;
      }
    }
  }

  @media ${({ theme }) => theme.sizes.mobile} {
    img {
      display: none;
    }
    gap: 25px;
    height: 200px;

    .post-item-header {
    
      .post-item-info {
        display: flex;
        flex-direction: column;
        gap: 25px;
      }
    }

    .post-item-description {
      p:last-child {
        display: none;
      }
    }
  }

`

export default PostItemContainer
