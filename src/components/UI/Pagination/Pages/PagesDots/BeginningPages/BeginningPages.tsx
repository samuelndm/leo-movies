import React from 'react'
import * as S from '../../styles'

type BeginningPagesProps = {
  prevPage: number | null
  page: number
  setPage: (page: number) => void
  nextPage: number | null
  nextPages: number[]
  selectPage: () => void
  pages: number[]
}

const BeginningPages = ({
  prevPage,
  page,
  setPage,
  nextPage,
  nextPages,
  selectPage,
  pages,
}: BeginningPagesProps) => {
  return (
    <>
      {prevPage !== null && (
        <S.Page onClick={() => setPage(prevPage)}>{prevPage}</S.Page>
      )}

      <S.Page isActive={true}>{page}</S.Page>

      {nextPages.map(
        (index: number) =>
          nextPage !== null &&
          page + index < pages.length && (
            <S.Page
              onClick={() => setPage(nextPage + index)}
              key={`BeginningPages-${index}`}
            >
              {nextPage + index}
            </S.Page>
          )
      )}

      <S.Page onClick={() => selectPage()}>...</S.Page>
    </>
  )
}

export default BeginningPages
