import React from "react";
import * as S from "../../styles";

const BeginningPages = ({
  prevPage,
  page,
  setPage,
  nextPage,
  nextPages,
  selectPage,
  pages,
}) => {
  return (
    <>
      {prevPage !== null && (
        <S.Page onClick={(e) => setPage(prevPage)}>{prevPage}</S.Page>
      )}

      <S.Page isActive={true}>{page}</S.Page>

      {nextPages.map(
        (index) =>
          nextPage !== null &&
          page + index < pages.length && (
            <S.Page
              onClick={(e) => setPage(nextPage + index)}
              key={`BeginningPages-${index}`}
            >
              {nextPage + index}
            </S.Page>
          )
      )}

      <S.Page onClick={(e) => selectPage(e)}>...</S.Page>
    </>
  );
};

export default BeginningPages;
