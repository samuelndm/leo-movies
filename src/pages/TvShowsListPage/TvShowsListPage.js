import React, { useEffect, useState } from "react";
import { SORT_BY, SORT_BY_LIST } from "utils/constants";
import * as API from "services/Loaders";
import * as GS from "assets/styles/GlobalStyles";
import * as C from "components";
import * as UI from "components/UIComponents";

const TvShowsListPage = () => {
  const itemsPerPage = 20;
  const [tvShows, setTvShows] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState(SORT_BY.POPULARITY_DESC);
  const [params, setParams] = useState({
    page,
    sort_by: sortBy,
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
    setParams((params) => ({ ...params, page, sort_by: sortBy }));
  }, [page, sortBy]);

  return (
    <GS.PageContainer>
      <GS.PageTitle>Tv Shows</GS.PageTitle>

      <UI.Select
        options={SORT_BY_LIST}
        defaultValue={sortBy}
        label="Sort Results By"
        onChange={setSortBy}
      />

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
