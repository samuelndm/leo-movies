import styled from "styled-components";

export const Iframe = styled.iframe`
  width: 1140px;
  max-width: 100%;
  height: 80vh;

  @media screen and (max-width: 586px) {
    height: 350px;
  }
`;
