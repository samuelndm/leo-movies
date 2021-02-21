import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 15px 0 0;
  color: #fff;

  & > * {
    margin: 10px 0;
  }

  & > .skeleton-1,
  .skeleton-2,
  .skeleton-3 {
    margin: 0;
    height: 40px;
    border-radius: 6px;

    @media screen and (max-width: 991px) {
      width: 100%;
    }
  }

  & > .skeleton-1 {
    width: 150px;
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
