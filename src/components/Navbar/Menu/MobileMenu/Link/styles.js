import styled from "styled-components";

export const Container = styled.div`
  margin: 0 0 10px;
  width: 100%;
  background: var(--gradient-secondary-color, #333);
  border-radius: 6px 0 0 6px;

  & a {
    color: #fff;
    padding: 15px 20px;
    font-size: 14px;
    font-weight: 700;

    &:hover {
      color: #dfdfdf;
    }
  }
`;

export const Icon = styled.i``;
