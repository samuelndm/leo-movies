import React, { useState, useEffect } from 'react'
import * as Hooks from 'hooks'
import * as C from 'components'
import * as S from './styles'

type SearchProps = {
  placeholder?: string
  isLoading?: boolean
  onChange: (keyword: string) => void
  style?: React.CSSProperties
}

const Search = ({ placeholder, isLoading, onChange, style }: SearchProps) => {
  const [keyword, setKeyword] = useState('')
  const debouncedKeyword = Hooks.useDebounce(keyword, 500)

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    onChange(debouncedKeyword)
  }

  useEffect(() => {
    onChange(debouncedKeyword)
  }, [onChange, debouncedKeyword])

  return (
    <S.Form style={style} onSubmit={handleSubmit}>
      <S.Input
        type="search"
        aria-label={`${placeholder || 'search'} input`}
        placeholder={placeholder || 'Search'}
        onChange={(e) => setKeyword(e.target.value)}
      />

      <S.Button
        type="submit"
        aria-label="search button"
        isActive={!!keyword}
        onClick={handleSubmit}
      >
        {isLoading ? <C.UI.Spinner size={20} /> : <S.Icon />}
      </S.Button>
    </S.Form>
  )
}

export default Search
