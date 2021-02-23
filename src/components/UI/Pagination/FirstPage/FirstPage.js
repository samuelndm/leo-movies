import React from "react";
import * as S from "../styles";

const FirstPage = ({ setPage }) => {
  return (
    <S.Icon className='fas fa-angle-double-left' onClick={(e) => setPage(1)} />
  );
};

export default FirstPage;
