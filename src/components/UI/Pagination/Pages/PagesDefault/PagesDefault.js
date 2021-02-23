import React from "react";
import * as S from "../styles";

const PagesDefault = ({ page, setPage, pages }) => {
  return (
    <>
      {pages.map((index) => (
        <S.Page
          isActive={page === index + 1}
          onClick={(e) => setPage(index + 1)}
          key={`page-${index}`}
        >
          {index + 1}
        </S.Page>
      ))}
    </>
  );
};

export default PagesDefault;
