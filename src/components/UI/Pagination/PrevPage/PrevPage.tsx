import React from 'react'
import * as S from '../styles'

type PrevPageProps = {
  page: number
  setPage: (page: number | null) => void
}

const PrevPage = ({ page, setPage }: PrevPageProps) => {
  return (
    <S.Icon
      className="fas fa-chevron-left"
      onClick={() => setPage(page > 1 ? page - 1 : page)}
    />
  )
}

export default PrevPage
