import styled from "styled-components";

export const Container = styled.h2`
  font-size: 34px;
  font-weigt: 900;

  @media screen and (max-width: 991px) {
    text-align: center;
  }
`;

export const SkeletonStyle = styled.div`
  width: 300px;
  height: 30px;
  border-radius: 6px;
`;
