import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 991px) {
    display: none;
  }
`;

export const Separator = styled.div`
  display: inline-block;
  width: 7px;
  height: 7px;
  border-radius: 1px;
  border: 1px solid #d85859;
  transform: rotate(45deg);
`;
