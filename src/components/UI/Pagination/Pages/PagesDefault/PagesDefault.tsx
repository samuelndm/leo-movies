import React from 'react'
import * as S from '../styles'

type PagesDefault = {
  page: number
  setPage: (page: number | null) => void
  pages: number[]
}

const PagesDefault = ({ page, setPage, pages }: PagesDefault) => {
  return (
    <>
      {pages.map((index: number) => (
        <S.Page
          isActive={page === index + 1}
          onClick={() => setPage(index + 1)}
          key={`page-${index}`}
        >
          {index + 1}
        </S.Page>
      ))}
    </>
  )
}

export default PagesDefault
