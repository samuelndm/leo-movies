import styled, { css } from 'styled-components'

type PageProps = {
  isActive?: boolean
}

export const Page = styled.div<PageProps>`
  ${({ isActive }) => css`
    margin: 0 0.2rem;
    padding: 0.9rem 1.5rem;
    display: inline-block;
    color: ${isActive ? '#fff' : '#212366'};
    font-size: 1.5rem;
    line-height: inherit;
    background-color: ${isActive ? 'var(--pagination-color)' : 'transparent'};
    border: 0;
    border-radius: 0.3rem;
    text-decoration: none;
    text-shadow: ${isActive
      ? '0.1rem 0.1rem 0.1rem rgb(190, 190, 190)'
      : 'none'};
    cursor: pointer;

    &:hover {
      background-color: var(--pagination-color);
      opacity: 0.8;
      color: #fff;
      text-shadow: 0.1rem 0.1rem 0.1rem rgb(190, 190, 190);
    }
  `}
`
