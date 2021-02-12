import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  width: 150px;
  height: 225px;
  border-radius: 6px;
  cursor: pointer;

  & > .body {
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;

  border-radius: inherit;
`;
