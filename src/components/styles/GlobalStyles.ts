import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@800&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    width: 100%;
    height: 100%;
    max-width: 100vw;
    min-height: 100vh;
    font-size: 16px;
    font-weight: 800;
    font-family: 'Inter', sans-serif;
  }

  img {
    max-width: 100%;
    object-fit: cover;
    object-position: center;
  }
`

export default GlobalStyles
