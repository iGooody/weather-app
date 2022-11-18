import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  body {
    display: flex;
    justify-content: center;
    background: rgb(238,174,202);
    background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
    min-width: 100vw;
    min-height: 100vh;
    margin: 0;
    font-family: Poppins, sans-serif;
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