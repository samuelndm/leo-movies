import styled from "styled-components";
import { ResponsiveContainer } from "assets/styles/GlobalStyles";

export const Container = styled(ResponsiveContainer)`
  margin: 50px auto;
`;

export const Persons = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;

  @media screen and (max-width: 991px) {
    justify-content: center;
  }
`;
