import styled from "styled-components";

export const Container = styled.div`
  margin: 15px;
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
    margin: 15px auto;
    width: 225px;
    height: 337.5px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;
