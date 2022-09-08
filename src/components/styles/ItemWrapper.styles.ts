import styled from "styled-components";

interface IItemWrapper {
  padding?: string
}

const ItemWrapper = styled.div<IItemWrapper>`
  max-width: 480px;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 1 40%;
  width: 100%;
  padding: ${({ padding }) => padding || '20px 20px 20px 20px'};
  border: 5px solid ${({ theme }) => theme.colors.primary};
  border-radius: 6px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, .25);
  overflow: hidden;
`

export default ItemWrapper
