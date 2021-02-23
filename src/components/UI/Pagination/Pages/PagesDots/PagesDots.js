import React, { useEffect, useState } from "react";
import * as UTIL from "utils";
import BeginningPages from "./BeginningPages/BeginningPages";
import EndPages from "./EndPages/EndPages";

const PagesDots = ({ page, setPage, pages, limit }) => {
  const [prevPage, setPrevPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [prevPages, setPrevPages] = useState([]);
  const [nextPages, setnextPages] = useState([]);

  useEffect(() => {
    setPrevPage(page - 1 > 0 ? page - 1 : null);
    setNextPage(page + 1 <= pages.length ? page + 1 : null);
  }, [pages, page]);

  useEffect(() => {
    setPrevPages(UTIL.createArrayOfGivenNumber(limit - 1, "reverse"));
    setnextPages(UTIL.createArrayOfGivenNumber(limit));
  }, [limit]);

  const selectPage = (event) => {
    event.preventDefault();
    const selectedPage = window.prompt(`Páginas: 1-${pages.length}`);

    if (selectedPage > 0 && selectedPage <= pages.length) {
      setPage(selectedPage);
    }
  };

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
  );
};

export default PagesDots;
