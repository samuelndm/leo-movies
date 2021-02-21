import styled from "styled-components";

export const Action = styled.span`
  margin: 10px;
  padding: 0 5px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  background: var(--gradient-secondary-color);
  box-shadow: 0 10px 20px 0 rgba(14, 14, 14, 0.15);
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #ec9929;
  }
`;

export const CircleAction = styled(Action)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const RectAction = styled(Action)`
  padding: 0 10px;
  width: 160px;
  height: 35px;
  border-radius: 18px;
  font-size: 14px;
  font-weight: 700;

  @media screen and (max-width: 586px) {
    width: 100%;
    justify-content: center;
    & > * {
      margin: 10px;
    }
  }
`;

export const Icon = styled.i`
  font-size: 14px;
  color: ${({ color }) => color};
`;
