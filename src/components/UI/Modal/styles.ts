import styled, { keyframes } from 'styled-components'
import * as UTIL from 'utils'

type ContentProps = {
  isOpen: boolean | null
  size?: UTIL.Enums.ModalSizes
}

export const Container = styled.div`
  align-items: center;
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  padding: 0 1.5rem;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 99999;
  @media screen and (max-width: 586px) {
    padding: 0;
    height: 100vh;
  }
`

export const ContentOpenAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const ContentClosingAnimation = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(100%);
  }
`

export const Content = styled.div<ContentProps>`
  z-index: 99999;
  margin: auto;
  padding: 1.5rem;
  position: relative;
  border-radius: 0.6rem;
  background-color: transparent;
  animation: ${({ isOpen }) =>
    isOpen ? ContentOpenAnimation : ContentClosingAnimation}
    0.5s ease-in-out;
  width: ${({ size }) => {
    switch (size) {
      case 'lg':
        return '80rem'
      case 'md':
        return '60rem'
      case 'sm':
        return '40rem'
      default:
        return 'auto'
    }
  }};
  @media (min-width: 480px) {
    max-width: 72.8rem;
  }
  @media (min-width: 992px) {
    max-width: 96.0rem;
  }
  @media (min-width: 1200px) {
    max-width: 114.0rem;
  }
}
  `

export const CloseButton = styled.button`
  background: #f7f9fc;
  border: 0.2rem solid #8f9bb3;
  border-radius: 100rem;
  cursor: pointer;
  height: 3.8rem;
  margin: 0 0.5rem 0 3rem;
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  width: 3.8rem;
  z-index: 999999;
`

export const CloseIcon = styled.i`
  color: #2e3a59;
  font-size: 2.4rem;
  font-weight: 300;
`

export const Background = styled.div`
  align-items: center;
  background-color: rgb(128 128 128 / 92%);
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
`
