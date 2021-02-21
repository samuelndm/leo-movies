import styled from "styled-components";

export const Container = styled.div`
  color: #fff;

  &:last-child {
    margin: 10px 0 0;
  }

  @media screen and (max-width: 991px) {
    text-align: center;
  }
`;

export const Title = styled.h3`
  font-size: 15px;
`;

export const Content = styled.p`
  font-size: 13px;
`;

export const SkeletonStyle = styled.div`
  margin: 10px 0 0;
  width: 150px;
  height: 30px;
  border-radius: 6px;

  &:last-child {
    width: 175px;
  }
`;
