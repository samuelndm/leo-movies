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
  border-radius: 50%;
  border: 3px solid
    ${({ voteAverage }) => {
      if (!voteAverage) {
        return "#7b7b7b";
      } else if (voteAverage >= 7) {
        return "#2eba72";
      } else if (voteAverage >= 5) {
        return "#FFEE44";
      } else {
        return "#bf0000";
      }
    }};

  color: #fff;
  font-weight: 700;

  @media screen and (max-width: 575px) {
    top: 70%;
  }
`;
