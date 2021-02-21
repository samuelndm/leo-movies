import styled from "styled-components";

export const Container = styled.div`
  color: #fff;

  &:last-child {
    margin: 10px 0;
  }

  & > .skeleton-1,
  .skeleton-2 {
    margin: 0;
    width: 150px
    height: 40px;
    border-radius: 6px;

    @media screen and (max-width: 991px) {
      width: 100%;
    }
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
