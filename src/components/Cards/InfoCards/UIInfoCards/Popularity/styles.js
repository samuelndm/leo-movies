import styled from "styled-components";

export const Container = styled.span`
  width: 50px;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ popularity }) =>
    popularity !== null ? "var(--primary-color, #333)" : "transparent"};
  border: 3px solid
    ${({ popularity }) =>
      popularity !== null ? "var(--secondary-color, #bf0000)" : "#e3e3e3"};

  border-radius: 50%;

  color: #fff;
  font-weight: 700;
  font-size: 14px;
`;

export const SkeletonStyle = styled(Container)`
  background: none;
  border: none;
`;
