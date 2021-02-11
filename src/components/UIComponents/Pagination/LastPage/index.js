import React from "react";
import * as S from "../styles";

const LastPage = ({ lastPage, setPage }) => {
  return (
    <S.Icon
      className='fas fa-angle-double-right'
      onClick={(e) => setPage(lastPage)}
    />
  );
};

export default LastPage;
