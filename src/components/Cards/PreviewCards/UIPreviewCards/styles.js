import styled from "styled-components";

export const Container = styled.div`
  margin: 15px auto;
  width: 150px;
  height: 320px;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  border-radius: 6px;

  @media screen and (max-width: 586px) {
    margin: 15px auto 0;
    width: 225px;
    height: 440px;
    align-items: center;
  }
`;
