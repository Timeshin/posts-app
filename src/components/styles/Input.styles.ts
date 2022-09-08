import styled from "styled-components";

const Input = styled.input`
  max-width: 295px;
  padding: 10px;
  font-size: 16px;
  font-weight: 800;
  border-radius: 10px;
  flex: 1 1 100%;
  border: 4px solid ${({ theme }) => theme.colors.primary};
  background-color: #D9D9D9;
  outline: none;
`

export default Input
