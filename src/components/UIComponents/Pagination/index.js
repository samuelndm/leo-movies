import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { createArrayOfGivenNumber, ScrollToTop } from "../../../utils";
import * as UTIL from "../../../utils/paginationUtil";
import * as S from "./styles";
import FirstPage from "./FirstPage";
import PrevPage from "./PrevPage";
import Pages from "./Pages";
import NextPage from "./NextPage";
import LastPage from "./LastPage";

const Pagination = ({
  itemsPerPage,
  setItemsPerPage,
  initialPage,
  setCurrentPage,
  totalItems,
  color,
}) => {
  const history = useHistory();
  const [perPage, setPerPage] = useState(null);
  const [page, setPage] = useState(null);
  const [pages, setPages] = useState([]);

  const handleParams = useCallback(() => {
    const newPerpage = UTIL.handleCurrentPerPage(
      history.location.search,
      itemsPerPage,
      totalItems
    );
    setPerPage(newPerpage);
    setItemsPerPage && setItemsPerPage(newPerpage);

    const numberOfPages = UTIL.getNumberOfPages(newPerpage, totalItems);

    const newPage = UTIL.handleCurrentPage(
      history.location.search,
      initialPage,
      totalItems,
      numberOfPages
    );
    setPage(newPage);
    setCurrentPage && setCurrentPage(newPage);
  }, [
    history.location.search,
    itemsPerPage,
    setItemsPerPage,
    initialPage,
    setCurrentPage,
    totalItems,
  ]);

  const hadlePagination = useCallback(() => {
    if (page && perPage && totalItems) {
      const numberOfPages = UTIL.getNumberOfPages(perPage, totalItems);
      setPages(createArrayOfGivenNumber(numberOfPages));

      UTIL.updatePaginationUrl(history, page, perPage);
      ScrollToTop();
    }
  }, [page, perPage, history, totalItems]);

  useEffect(() => {
    handleParams();
  }, [handleParams]);

  useEffect(() => {
    if (page && perPage) {
      hadlePagination();
    }
  }, [page, perPage, hadlePagination]);

  if (pages.length < 2) return null;
  return (
    <S.Container color={color}>
      <FirstPage setPage={setPage} />
      <PrevPage page={page} setPage={setPage} />

      <Pages page={page} setPage={setPage} pages={pages} />

      <NextPage page={page} setPage={setPage} pagesTotal={pages.length} />
      <LastPage lastPage={pages.length} setPage={setPage} />
    </S.Container>
  );
};

Pagination.propTypes = {
  itemsPerPage: PropTypes.number,
  setItemsPerPage: PropTypes.func,
  initialPage: PropTypes.number,
  setCurrentPage: PropTypes.func,
  totalItems: PropTypes.number.isRequired,
  color: PropTypes.string,
};

export default Pagination;
