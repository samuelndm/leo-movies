import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  padding: 20px;
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
