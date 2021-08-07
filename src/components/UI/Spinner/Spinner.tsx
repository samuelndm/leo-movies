import React from 'react'
import { ClipLoader } from 'react-spinners'
import * as S from './styles'

type SpinnerProps = {
  size?: number
  color?: string
}

const Spinner = ({ size, color }: SpinnerProps) => {
  const DEFAULT_SIZE = 50
  const DEFAULT_COLOR = '#2F276C'

  return (
    <S.Container>
      <ClipLoader size={size || DEFAULT_SIZE} color={color || DEFAULT_COLOR} />
    </S.Container>
  )
}

export default Spinner
