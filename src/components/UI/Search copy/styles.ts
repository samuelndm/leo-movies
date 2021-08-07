import styled, { css } from 'styled-components'
import { FaSearch } from 'react-icons/fa'

type ButtonProps = {
  isActive?: boolean
}

export const Form = styled.form`
  width: 100%;
  margin: 0 auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Label = styled.label``

export const Input = styled.input`
  padding: 1rem;
  width: 100%;
  font-size: 2.4rem;
  border-bottom: 0.1rem solid #bdbdbd;
  color: #787878;

  &::placeholder {
    font-family: 'Open Sans', sans-serif;
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 300;
    line-height: 3.3rem;
    letter-spacing: 0;
    text-align: center;
    color: #a8a8a8;
  }

  &::-webkit-search-cancel-button {
    position: relative;
    right: 6rem;
    font-size: 3rem;
  }
`

export const Button = styled.button<ButtonProps>`
  ${({ isActive }) => css`
    padding: 1rem;
    position: absolute;
    background-color: transparent;
    cursor: pointer;
    ${isActive ? 'right: 2.5rem' : 'left: 2.5rem'};
  `}
`

export const Icon = styled(FaSearch)`
  color: #787878;
  font-size: 2.2rem;
`
