import React from 'react'
import * as S from '../styles'

type LastPageProps = {
  lastPage: number | null
  setPage: (page: number | null) => void
}

const LastPage = ({ lastPage, setPage }: LastPageProps) => {
  return (
    <S.Icon
      className="fas fa-angle-double-right"
      onClick={() => setPage(lastPage)}
    />
  )
}

export default LastPage
