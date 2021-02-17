import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: auto;
  height: auto;
  max-width: 170px;
  max-height: calc(var(--navbar-height) - 20px);

  @media screen and (max-width: 768px) {
    max-width: 130px;
    max-height: calc(var(--navbar-height));
  }

  @media screen and (max-width: 360px) {
    max-width: 100px;
  }
`;
