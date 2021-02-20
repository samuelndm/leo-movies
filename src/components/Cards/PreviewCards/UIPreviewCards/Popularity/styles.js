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

  background-color: ${({ popularity }) =>
    popularity !== null ? "var(--primary-color, #333)" : "transparent"};
  border: 3px solid
    ${({ popularity }) =>
      popularity !== null ? "var(--secondary-color, #bf0000)" : "#e3e3e3"};

  border-radius: 50%;

  color: #fff;
  font-weight: 700;
  font-size: 14px;

  & > .skeleton-body {
    width: 100%;
    height: 100%;
    background-color: #e3e3e3;
  }

  @media screen and (max-width: 586px) {
    top: 70%;
  }
`;
