import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  & > .skeleton {
    width: 60%;
    height: 40px;
    border-radius: 6px;

    @media screen and (max-width: 991px) {
      width: 100%;
    }
  }
`;

export const Content = styled.div`
  margin: 0 0 10px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;

  & > * {
    margin: 10px 10px 0 5px;
    color: #fff;
  }

  @media screen and (max-width: 991px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const Separator = styled.span`
  width: 4px;
  display: list-item;
  list-style-type: disc;
  list-style-position: inside;

  @media screen and (max-width: 991px) {
    display: none;
  }
`;
