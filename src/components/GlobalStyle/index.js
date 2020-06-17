import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    ${'' /* Declare global css variables. */}
    ${'' /* Syntax goes like this: --variableName: cssProperties */}
    --color-primary: rgba(52, 69, 99, 1);
    --color-primary-lt: rgba(52, 69, 99, 0.8);
    --font-primary: 'Noto Sans JP', sans-serif; 
  }

  
`
