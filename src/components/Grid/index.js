import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 200px auto;
  grid-template-rows: 50px 1fr;
  height: 100vh;
  width: 100%;
  grid-template-areas:
    'header header'
    'navbar content';
`
