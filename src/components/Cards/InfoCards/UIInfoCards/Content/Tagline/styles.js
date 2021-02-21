import styled from "styled-components";

export const Container = styled.span`
  margin: 10px 0 0;
  width: 100%;
  color: #fff;
  font-weight: 400;
  font-style: italic;
  opacity: 0.7;

  & > .skeleton {
    width: 60%;
    height: 40px;
    border-radius: 6px;

    @media screen and (max-width: 975px) {
      width: 100%;
    }
  }
`;
