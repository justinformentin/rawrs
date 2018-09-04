import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`

* {
  margin:0;
}
  html,
  body {
    height:100%;
    background-color: #ededed;
    margin: 0;
  }
  
  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size:1.25rem;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  h1, h2 {
      font-family:'Helvetica', Helvetica, Arial, sans-serif;
  }
  #root {
    height:100%;
    background-color: #ededed;
  }

  .main-container {
    height:100%;

  }

  .body-container {
    padding: 2rem 2rem 6rem 2rem;

  }
  .text-columns {
      display:flex;
  }

  table {
    border: 3px solid #666666;
    border-collapse: collapse;
  }

  td, th {
    border: 1px solid #999999;
  }

  p,
  label {
    line-height: 1.5em;
  }
`;
