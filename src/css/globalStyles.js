import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
  ${reset}
  html {
    font-size: 10px;
    color: #000;
  }
  h1 {
    font-size: 3.2rem;
    font-weight: bold;
  }
  h3 {
    font-size: 2.4rem;
    line-height: 3.4rem;
  }
  h5 {
    font-size: 1.8rem;
    line-height: 2.8rem;
  }
  p {
    font-size: 1.6rem;
    line-height: 2.6rem;
  }
  a {
    text-decoration: none;
  }
  button {
    margin: 0;
    padding: 0;
    background:none;
    border:none;
    cursor: pointer;
  }
  #wrap28 {
    width: calc(100% - 56px);
    margin: 0 auto;
  }
  input {
    margin: 0;
  }

  .bottommargin {
    display: block;
    width: 100%;
    height: 60px;
    margin-top: 30px;
  }

  header{
    background:#fff
  }
`;



export default globalStyles;