import React, { useEffect, useState } from 'react'
import * as UTIL from 'utils'
import BeginningPages from './BeginningPages/BeginningPages'
import EndPages from './EndPages/EndPages'

type PagesDotsProps = {
  page: number
  setPage: (page: number) => void
  pages: number[]
  limit: number
}

const PagesDots = ({ page, setPage, pages, limit }: PagesDotsProps) => {
  const [prevPage, setPrevPage] = useState<number | null>(null)
  const [nextPage, setNextPage] = useState<number | null>(null)
  const [prevPages, setPrevPages] = useState<number[]>([])
  const [nextPages, setnextPages] = useState<number[]>([])

  useEffect(() => {
    setPrevPage(page - 1 > 0 ? page - 1 : null)
    setNextPage(page + 1 <= pages.length ? page + 1 : null)
  }, [pages, page])

  useEffect(() => {
    setPrevPages(UTIL.Common.createArrayOfGivenNumber(limit - 1, 'reverse'))
    setnextPages(UTIL.Common.createArrayOfGivenNumber(limit))
  }, [limit])

  const selectPage = () => {
    const selectedPage = window.prompt(`Páginas: 1-${pages.length}`)
    const integerPage =
      selectedPage && Number.isInteger(selectedPage)
        ? Number.parseInt(selectedPage)
        : 1

    if (integerPage > 0 && integerPage <= pages.length) {
      setPage(integerPage)
    }
  }

  return (
    <>
      {page < pages.length - 1 ? (
        <BeginningPages
          prevPage={prevPage}
          page={page}
          setPage={setPage}
          nextPage={nextPage}
          nextPages={nextPages}
          selectPage={selectPage}
          pages={pages}
        />
      ) : (
        <EndPages
          prevPage={prevPage}
          prevPages={prevPages}
          page={page}
          setPage={setPage}
          selectPage={selectPage}
        />
      )}
    </>
  )
}

export default PagesDots
