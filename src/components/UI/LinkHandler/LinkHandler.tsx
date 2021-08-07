import React from 'react'
import { Link } from 'react-router-dom'
import * as UTIL from 'utils'
import * as S from './styles'

type LinkHandlerProps = {
  url?: string
  target?: string
  title?: string
  children?: React.ReactElement
  childrenPosition?: string
  color?: string
  colorOnHover?: string
  margin?: string
  padding?: string
  width?: string
  height?: string
  setHasClicked: (hasClicked: boolean) => void
}

const LinkHandler = ({
  url,
  target,
  title,
  children,
  childrenPosition,
  color,
  colorOnHover,
  margin,
  padding,
  width,
  height,
  setHasClicked,
}: LinkHandlerProps) => {
  return (
    <S.Container
      childrenPosition={childrenPosition}
      color={color}
      colorOnHover={colorOnHover}
      margin={margin}
      padding={padding}
      width={width}
      height={height}
    >
      {UTIL.Common.isExternalUrl(url) ? (
        <S.LinkAnchor href={url || '#'} target={target || '_self'}>
          {title && <S.Title>{title || ''}</S.Title>}
          {children}
        </S.LinkAnchor>
      ) : (
        <Link
          to={url || '#'}
          target={target || '_self'}
          onClick={() => {
            setHasClicked && setHasClicked(true)
          }}
        >
          {title && <S.Title>{title || ''}</S.Title>}
          {children}
        </Link>
      )}
    </S.Container>
  )
}

export default LinkHandler
