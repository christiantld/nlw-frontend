import { createGlobalStyle } from "styled-components";
import { lighten } from "polished";
export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

   *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%
  }

  body {
    background: #f0f0f5;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family:'Roboto',  Arial, Helvetica, sans-serif;
  }

  #root {
    max-width: 1280px;
    margin: 0 auto;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  form input {

    border: 1px solid #fafaf9;
 
    &:focus {
      border: 1px solid #90aeff;
        box-shadow: 0 0 4px ${lighten(0.02, "#90aeff")};
    }
  }
`;
