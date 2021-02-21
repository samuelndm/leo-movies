import styled from "styled-components";

export const Container = styled.span`
  padding: 0 10px;
  width: 45px;
  height: 45px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ voteAverage }) =>
    voteAverage !== null ? "var(--primary-color, #333)" : "transparent"};
  border-radius: 50%;
  border: 3px solid
    ${({ voteAverage }) => {
      if (voteAverage === null) {
        return "#e3e3e3";
      } else if (!voteAverage) {
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
`;
