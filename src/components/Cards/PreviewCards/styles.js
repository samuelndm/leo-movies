import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  width: 150px;
  height: 225px;
  border-radius: 6px;
  cursor: pointer;

  & > .skeleton-body {
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }

  @media screen and (max-width: 575px) {
    width: 225px;
    height: 337.5px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: inherit;
`;
