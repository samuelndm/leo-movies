import styled from "styled-components";

export const Container = styled.div`
  padding: 15px 0;
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
`;

export const Details = styled.div`
  flex: 1;
  padding: 0 20px;
  height: 100%;
  min-height: 470px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  @media screen and (max-width: 991px) {
    width: 100%;
    padding: 5px;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;

  & > * {
    margin: 10px 15px 0 0;
    color: #fff;
  }

  @media screen and (max-width: 991px) {
    justify-content: center;
  }
`;

export const Separator = styled.span`
  width: 4px;
  display: ${({ isVisible }) => (isVisible ? "list-item" : "none")};
  list-style-type: disc;
  list-style-position: inside;

  @media screen and (max-width: 991px) {
    display: none;
  }
`;
