import styled from "styled-components";

export const Container = styled.span`
  width: 45px;
  height: 45px;
  position: absolute;
  top: 62.5%;
  left: -10px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--primary-color, #333);
  border: 3px solid var(--secondary-color, #bf0000);
  border-radius: 50%;

  color: #fff;
  font-weight: 700;
  font-size: 14px;

  @media screen and (max-width: 575px) {
    top: 70%;
  }
`;
