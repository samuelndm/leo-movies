import React from "react";
import * as S from "../../styles";

const EndPages = ({ prevPage, prevPages, page, setPage, selectPage }) => {
  return (
    <>
      {prevPages.map(
        (index) =>
          !!prevPage && (
            <S.Page
              onClick={(e) => setPage(prevPage - index)}
              key={`EndPages-${index}`}
            >
              {prevPage - index}
            </S.Page>
          )
      )}

      <S.Page onClick={(e) => selectPage(e)}>...</S.Page>
      <S.Page isActive={true}>{page}</S.Page>
    </>
  );
};

export default EndPages;
