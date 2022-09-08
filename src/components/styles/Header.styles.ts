import styled from "styled-components";

const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.secondary};
  width: 100%;
  height: 118px;
  display: flex;
  justify-content: center;
  grid-area: header;
`

export default Header
