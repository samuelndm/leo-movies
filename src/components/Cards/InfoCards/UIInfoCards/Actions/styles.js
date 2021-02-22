import styled from "styled-components";

export const Action = styled.span`
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

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
  padding: 0 5px;
  width: 160px;
  height: 35px;
  border-radius: 18px;
  font-size: 13px;
  font-weight: 700;
  text-align: center;

  @media screen and (max-width: 586px) {
    width: 100%;
  }
`;

export const Icon = styled.i`
  margin: 0 5px;
  font-size: 14px;
  color: ${({ color }) => color};
`;

export const SkeletonCircleStyle = styled(CircleAction)`
  margin: 15px 10px 10px;
  box-shadow: none;
`;

export const SkeletonRectleStyle = styled(RectAction)`
  margin: 15px 10px 10px;
  box-shadow: none;
`;
