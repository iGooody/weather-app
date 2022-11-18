import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  body {
    display: flex;
    justify-content: center;
    background-color: #EBF1FF;
    min-width: 100vw;
    min-height: 100vh;
    margin: 0;
    font-family: Roboto, sans-serif;
    position: relative;
    overflow-x: hidden;
  }
  a {
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
    &:active {
      filter: brightness(0.5);
    }
    &:visited {
      text-decoration: underline;
    }
  }
  input:focus {outline: none;}
  p {
    margin: 0;
  }
`