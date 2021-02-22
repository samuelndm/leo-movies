import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  height: auto;
  min-height: 450px;
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 991px) {
    width: 100%;
  }
`;

export const Image = styled.img`
  width: 300px;
  height: 450px;
  border-radius: 6px;
`;

export const SkeletonStyle = styled(Container)`
  width: 300px;
  height: 450px;
  border-radius: inherit;
`;
