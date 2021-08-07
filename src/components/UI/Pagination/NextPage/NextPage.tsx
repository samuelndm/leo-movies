import React from 'react'
import * as S from '../styles'

type NextPageProps = {
  page: number
  setPage: (page: number) => void
  pagesTotal: number
}

const NextPage = ({ page, setPage, pagesTotal }: NextPageProps) => {
  return (
    <S.Icon
      className="fas fa-chevron-right"
      onClick={() => {
        setPage(page < pagesTotal ? page + 1 : page)
      }}
    />
  )
}

export default NextPage
