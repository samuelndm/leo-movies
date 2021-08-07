import styled from "styled-components";

export const Container = styled.h2`
  margin: 30px 0 0;
  width: 100%;
  color: #000;
  font-size: 14px;
  font-weight: 700;
  text-align: left;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  @media screen and (max-width: 586px) {
    text-align: center;
  }
`;
