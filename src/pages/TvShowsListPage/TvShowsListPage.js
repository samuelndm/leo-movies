import React, { useEffect, useState } from "react";
import * as API from "services/Loaders";
import * as GS from "assets/styles/GlobalStyles";
import * as C from "components";
import * as UI from "components/UIComponents";

const TvShowsListPage = () => {
  const itemsPerPage = 20;
  const [tvShows, setTvShows] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [page, setPage] = useState(1);
  const [params, setParams] = useState({
    page,
    sort_by: "title.asc",
  });

  const loadData = async (params) => {
    const response = await API.loadTvShowsList(params);

    setTvShows(response?.results || []);
    setTotalItems(response?.total_results || 0);
  };

  useEffect(() => {
    loadData(params);
  }, [params]);

  useEffect(() => {
    setParams((params) => ({ ...params, page }));
  }, [page]);

  return (
    <GS.PageContainer>
      <GS.PageTitle>Tv Shows</GS.PageTitle>

      <C.TvShowsList tvShows={tvShows} />

      <UI.Pagination
        itemsPerPage={itemsPerPage}
        initialPage={page}
        setCurrentPage={setPage}
        totalItems={totalItems}
      />
    </GS.PageContainer>
  );
};

export default TvShowsListPage;
