import styled from "styled-components";

export const Container = styled.span`
  margin: 10px 0 0 5px;
  width: 100%;
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  font-style: italic;
  opacity: 0.7;

  @media screen and (max-width: 991px) {
    text-align: center;
  }
`;

export const SkeletonStyle = styled.div`
  margin: 10px 0 0 0;
  width: 200px;
  height: 20px;
  border-radius: 6px;

  @media screen and (max-width: 991px) {
    width: 100%;
  }
`;
