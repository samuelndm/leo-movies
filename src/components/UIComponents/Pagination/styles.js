import styled from "styled-components";

export const Container = styled.div`
  margin: 20px 0;
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  --pagination-color: ${({ color }) =>
    color || "var(--primary-color, #31217C)"};
`;

export const Icon = styled.i`
  margin: 0 5px;
  padding: 10px 14px;
  cursor: pointer;
  background-color: transparent;

  &:hover {
    border-radius: 3px;
    background-color: var(--pagination-color);
    color: #fff;
    transition: background-color 2s ease-int-out;
  }

  @media screen and (max-width: 350px) {
    padding: 10px;
  }
`;
