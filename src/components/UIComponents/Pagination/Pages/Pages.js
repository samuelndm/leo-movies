import React, { useState } from "react";
import PagesDefault from "./PagesDefault/PagesDefault";
import PagesDots from "./PagesDots/PagesDots";

const Pages = ({ page, setPage, pages }) => {
  const [limit] = useState(4);

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
