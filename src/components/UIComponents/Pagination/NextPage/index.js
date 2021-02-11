import React from "react";
import * as S from "../styles";

const NextPage = ({ page, setPage, pagesTotal }) => {
  return (
    <S.Icon
      className='fas fa-chevron-right'
      onClick={(e) => {
        setPage(page < pagesTotal ? page + 1 : page);
      }}
    />
  );
};

export default NextPage;
