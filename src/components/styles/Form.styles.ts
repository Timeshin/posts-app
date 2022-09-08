import styled from "styled-components";

const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 20px;
  gap: 25px;

  & > p {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 24px;
  }

  .error {
    font-size: 18px;
    color: red;
  }

  & .form-filed {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: 24px;
    }

  }

  button {
    border: none;
    border-radius: 10px;
    font-size: 24px;
    cursor: pointer;
    font-weight: 800;
    width: 215px;
    padding: 10px 0;
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`

export default Form
