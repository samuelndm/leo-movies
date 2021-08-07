import React, { useState } from 'react'
import PagesDefault from './PagesDefault/PagesDefault'
import PagesDots from './PagesDots/PagesDots'

type PagesProps = {
  page: number
  setPage: (page: number | null) => void
  pages: number[]
}

const Pages = ({ page, setPage, pages }: PagesProps) => {
  const [limit] = useState<number>(4)

  return pages?.length < limit ? (
    <PagesDefault page={page} setPage={setPage} pages={pages} />
  ) : (
    <PagesDots pages={pages} page={page} setPage={setPage} limit={limit} />
  )
}

export default Pages
