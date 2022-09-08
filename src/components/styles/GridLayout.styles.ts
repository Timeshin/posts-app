import styled from "styled-components";

const GridLayout = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas: 
    'header'
    'content';
`

export default GridLayout
