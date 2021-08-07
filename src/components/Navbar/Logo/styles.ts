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
  max-width: 190px;
  max-height: calc(var(--navbar-height) - 20px);

  @media screen and (max-width: 991px) {
    padding: 0 0;
  }
`;
