import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 225px;
  border-radius: 6px;

  @media screen and (max-width: 586px) {
    height: 337.5px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 225px;
  border-radius: 6px;

  @media screen and (max-width: 586px) {
    height: 337.5px;
  }
`;

export const SkeletonStyle = styled(Container)`
  margin: 0 0 5px;
`;
