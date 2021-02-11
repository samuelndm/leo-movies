import React, { useEffect, useState } from "react";
import PagesDefault from "./PagesDefault/PagesDefault";
import PagesDots from "./PagesDots/PagesDots";

const Pages = ({ page, setPage, pages }) => {
  const [limit, setLimit] = useState(4);

  const isWindowWidthSize = (width) => {
    return window.matchMedia(`(${width})`).matches;
  };

  useEffect(() => {
    switch (true) {
      case isWindowWidthSize("max-width: 575px"):
        setLimit(0);
        break;
      default:
        setLimit(4);
        break;
    }
  }, []);

  return (
    <>
      {pages.length < limit ? (
        <PagesDefault page={page} setPage={setPage} pages={pages} />
      ) : (
        <PagesDots pages={pages} page={page} setPage={setPage} limit={limit} />
      )}
    </>
  );
};

export default Pages;
