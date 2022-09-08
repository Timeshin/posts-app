import styled from "styled-components";

const HeaderContent = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .mobile-logo {
    display: none;
  }

  @media ${({ theme }) => theme.sizes.mobile} {
    .mobile-logo {
      display: block;
    }

    .logo {
      display: none;
    }
  }
`

export default HeaderContent
