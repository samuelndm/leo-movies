import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 15px 0 0 5px;
  color: #fff;

  & > * {
    margin: 10px 0;
  }

  @media screen and (max-width: 991px) {
    text-align: center;
  }
`;

export const Title = styled.h3``;

export const Content = styled.p`
  font-size: 15px;

  @media screen and (max-width: 991px) {
    font-size: 13px;
  }
`;

export const SkeletonTitleStyle = styled.div`
  margin: 10 0 0;
  width: 200px;
  height: 30px;
  border-radius: 6px;
`;

export const SkeletonTextStyle = styled.div`
  margin: 10px 0 0;
  width: 100%;
  height: 20px;
  border-radius: 6px;
`;
