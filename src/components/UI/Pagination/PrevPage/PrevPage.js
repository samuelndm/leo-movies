import React from "react";
import * as S from "../styles";

const PrevPage = ({ page, setPage }) => {
  return (
    <S.Icon
      className='fas fa-chevron-left'
      onClick={(e) => setPage(page > 1 ? page - 1 : page)}
    />
  );
};

export default PrevPage;
