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

    p, button, input, textarea {
        border: 0;
        outline: 0;
        font-family: Raleway, sans-serif;
        line-height: 20px;
    }

    #root {
      --primary-color: #032541;
      --secondary-color: #00506E;
      
      --gradient-primary-color: linear-gradient(90deg, #032541, #00506E);
      --gradient-secondary-color: linear-gradient(90deg, #9BAEBC, #677A86);
     
      --inverse-gradient-primary-color: linear-gradient(90deg, #00506E, #032541);
      --inverse-gradient-secondary-color: linear-gradient(90deg, #677A86, #9BAEBC);
      
      --background-color: #fff;
      --navbar-height: 90px;
   

      @media screen and (max-width: 1199px) {
        --navbar-height: 160px;
      }
    }

`;

export const PageContainer = styled.div`
  padding: var(--navbar-height) 0 var(--navbar-height);
  width: 100%;
  max-width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: ${({ backgroundColor }) =>
    backgroundColor || "var(--background-color, #fff)"};
`;

export const PageTitle = styled.h1`
  margin: 20px auto 10px;
  padding: 0 15px;
  width: 100%;
  color: #333;

  @media (min-width: 480px) {
    max-width: 728px;
    text-align: center;
  }

  @media (min-width: 992px) {
    max-width: 960px;
    text-align: left;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }
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

export const ContainerTitle = styled.h2`
  margin: 0 0 10px;
  color: #333;

  @media screen and (max-width: 586px) {
    text-align: center;
  }
`;

export const PageOptions = styled(ResponsiveContainer)`
  margin: 30px 0 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const FlexContainer = styled.div`
  width: ${({ width }) => width || "100%"};
  display: flex;
  flex-wrap: wrap;
  align-items: ${({ alignItems }) => alignItems || "center"};
  justify-content: ${({ justifyContent }) => justifyContent || "center"};

  &:after {
    content: "";
    flex: auto;
  }
`;

export const FlexItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
  width: ${({ lg }) => (lg ? (100 / 12) * lg : "16.66")}%;

  @media screen and (max-width: 1199px) {
    width: ${({ mg }) => (mg ? (100 / 12) * mg : "20")}%;
  }

  @media screen and (max-width: 991px) {
    width: ${({ sm }) => (sm ? (100 / 12) * sm : "33.33")}%;
  }

  @media screen and (max-width: 586px) {
    width: ${({ xs }) => (xs ? (100 / 12) * xs : "100")}%;
  }

  & > * {
    margin: ${({ margin }) => margin || "0"};
    padding: ${({ padding }) => padding || "0"};
  }
`;
