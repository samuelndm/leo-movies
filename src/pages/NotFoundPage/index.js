import React from "react";
import * as S from "./styles";
import * as GS from "../../assets/styles/GlobalStyles";

const NotFoundPage = () => {
  return (
    <GS.PageContainer>
      <S.Container>
        <S.Title>Página não encontrada</S.Title>
        <S.Icon className='fas fa-frown-open' />
      </S.Container>
    </GS.PageContainer>
  );
};

export default NotFoundPage;
