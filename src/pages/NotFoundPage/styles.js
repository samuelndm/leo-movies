import styled from "styled-components";
import * as GS from "assets/styles/GlobalStyles";

export const Container = styled(GS.PageContainer)`
  width: 100%;
  height: 100%;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #414141;
`;

export const Content = styled(GS.ResponsiveContainer)`
  width: 100%;
  height: 100%;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #414141;
`;

export const Title = styled.h1`
  margin: 10px;
  text-align: center;
  line-height: 32px;
`;

export const Icon = styled.i`
  margin: 10px;
  font-size: 48px;
`;
