import styled from "styled-components";
import { ResponsiveContainer } from "assets/styles/GlobalStyles";

export const Container = styled.div`
  padding: 70px 0 0;
  padding: 20px;
  width: 100%;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--gradient-primary-color);
`;

export const Content = styled(ResponsiveContainer)``;
