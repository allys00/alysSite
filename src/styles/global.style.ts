import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
  *,
  *::after,
  *::before {
  box-sizing: border-box;  
  }
  html *
    {
      font-family: 'Mulish', sans-serif;
    }
  body {
    background: ${({ theme }: any) => theme.contrast};
    color: ${({ theme }: any) => theme.main};
    margin: 0;    
    padding: 0;     
    transition: all 0.25s linear;
  }
   h1, h2, h3, h4, h5, h6 { 
     color: unset;
   }
   p {
     font-weight: 300;
   }
  `;
