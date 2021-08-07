import styled from "styled-components";
import { ResponsiveContainer } from "assets/styles/GlobalStyles";

export const Container = styled.div`
  padding: 20px 0 0;
  width: 100%;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--gradient-primary-color);

  @media screen and (max-width: 991px) {
    padding: 50px 0 0;
  }
`;

export const Content = styled(ResponsiveContainer)``;
