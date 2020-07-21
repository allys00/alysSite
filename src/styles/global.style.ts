import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
  *,
  *::after,
  *::before {
  box-sizing: border-box;  
  }
  html *
    {
      font-family: 'Alegreya', serif;
    }
  body {
    background: ${({ theme }: any) => theme.contrast};
    color: ${({ theme }: any) => theme.main};
    margin: 0;    
    padding: 0;    
    font-family: sans-serif;    
    transition: all 0.25s linear;
    font-family: 'Alegreya', serif;
  }
   h1, h2, h3, h4, h5, h6 { 
     color: unset;
   }
  `;
