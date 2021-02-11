import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;        
    }

    html, body, #root {
        height: 100%;
    }

    *, button, input, textarea {
        border: 0;
        outline: 0;
        font-family: Raleway, sans-serif;
        line-height: 20px;
    }

    #root {
      --primary-color: #31217C;
      --secondary-color: #381f1f;
      --orange-gradient-color: linear-gradient(90deg, #f18825, #fd5c3c);
      --background-color: #fff;
      --navbar-height: 127px;
    }

`;

export const PageContainer = styled.div`
  padding: var(--navbar-height) 0 0;
  width: 100%;
  max-width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: var(--background-color);
`;

export const ResponsiveContainer = styled.div`
  margin: 0 auto;
  padding: 0 15px;
  width: 100%;
  position: relative;

  @media (min-width: 480px) {
    max-width: 728px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;
