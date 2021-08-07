import React from 'react'
import * as S from '../styles'

type FirstPageProps = {
  setPage: (page: number | null) => void
}

const FirstPage = ({ setPage }: FirstPageProps) => {
  return (
    <S.Icon className="fas fa-angle-double-left" onClick={() => setPage(1)} />
  )
}

export default FirstPage
