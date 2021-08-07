import React from 'react'
import * as S from '../../styles'

type EndPagesProps = {
  prevPage: number | null
  prevPages: number[]
  page: number
  setPage: (page: number) => void
  selectPage: () => void
}

const EndPages = ({
  prevPage,
  prevPages,
  page,
  setPage,
  selectPage,
}: EndPagesProps) => {
  return (
    <>
      {prevPages.map(
        (index: number) =>
          !!prevPage && (
            <S.Page
              onClick={() => setPage(prevPage - index)}
              key={`EndPages-${index}`}
            >
              {prevPage - index}
            </S.Page>
          )
      )}

      <S.Page onClick={() => selectPage()}>...</S.Page>
      <S.Page isActive={true}>{page}</S.Page>
    </>
  )
}

export default EndPages
