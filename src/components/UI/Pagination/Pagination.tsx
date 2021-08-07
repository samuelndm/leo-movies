import React, { useState, useEffect, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import * as UTIL from 'utils'
import * as S from './styles'
import FirstPage from './FirstPage/FirstPage'
import PrevPage from './PrevPage/PrevPage'
import Pages from './Pages/Pages'
import NextPage from './NextPage/NextPage'
import LastPage from './LastPage/LastPage'

type PaginationProps = {
  itemsPerPage?: number
  setItemsPerPage?: (itemsPerPage: number | null) => void
  initialPage?: number
  setCurrentPage?: (currentPage: number | null) => void
  totalItems: number
  color?: string
}

const Pagination = ({
  itemsPerPage,
  setItemsPerPage,
  initialPage,
  setCurrentPage,
  totalItems,
  color,
}: PaginationProps) => {
  const history = useHistory()
  const [perPage, setPerPage] = useState<number | null>(null)
  const [page, setPage] = useState<number | null>(null)
  const [pages, setPages] = useState<number[]>([])

  const handleParams = useCallback(() => {
    const newPerpage = UTIL.Pagination.handleCurrentPerPage(
      history.location.search,
      itemsPerPage,
      totalItems
    )
    setPerPage(newPerpage)
    setItemsPerPage && setItemsPerPage(newPerpage)

    const numberOfPages = UTIL.Pagination.getNumberOfPages(
      newPerpage || 9,
      totalItems
    )

    const newPage = UTIL.Pagination.handleCurrentPage(
      history.location.search,
      initialPage,
      totalItems,
      numberOfPages
    )
    setPage(newPage)
    setCurrentPage && setCurrentPage(newPage)
  }, [
    history.location.search,
    itemsPerPage,
    setItemsPerPage,
    initialPage,
    setCurrentPage,
    totalItems,
  ])

  const hadlePagination = useCallback(() => {
    if (page && perPage && totalItems) {
      const numberOfPages = UTIL.Pagination.getNumberOfPages(
        perPage,
        totalItems
      )
      setPages(UTIL.Common.createArrayOfGivenNumber(numberOfPages))

      UTIL.Pagination.updatePaginationUrl(history, page, perPage)
      UTIL.Common.ScrollToTop()
    }
  }, [page, perPage, history, totalItems])

  useEffect(() => {
    handleParams()
  }, [handleParams])

  useEffect(() => {
    if (page && perPage) {
      hadlePagination()
    }
  }, [page, perPage, hadlePagination])

  if (pages.length < 2) return null
  return (
    <S.Container color={color}>
      <FirstPage setPage={setPage} />
      <PrevPage page={page || 1} setPage={setPage} />

      <Pages page={page || 1} setPage={setPage} pages={pages} />

      <NextPage page={page || 1} setPage={setPage} pagesTotal={pages.length} />
      <LastPage lastPage={pages.length} setPage={setPage} />
    </S.Container>
  )
}

export default Pagination
