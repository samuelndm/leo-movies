import React from "react";
import * as S from "./styles";

const NotFoundPage = () => {
  return (
    <S.Container>
      <S.Content>
        <S.Title>Página not found</S.Title>
        <S.Icon className="fas fa-frown-open" />
      </S.Content>
    </S.Container>
  );
};

export default NotFoundPage;
