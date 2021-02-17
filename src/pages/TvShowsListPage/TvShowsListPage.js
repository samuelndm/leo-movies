import React, { useEffect, useState } from "react";
import * as API from "services/Loaders";
import * as GS from "assets/styles/GlobalStyles";
import * as C from "components";
import * as UI from "components/UIComponents";

const TvShowsListPage = () => {
  const itemsPerPage = 20;
  const [tvShows, setTvShows] = useState([]);
  const [page, setPage] = useState(1);
  const [params] = useState({
    page,
    sort_by: "title.asc",
  });

  const loadData = async (params) => {
    const tvShows = await API.loadTvShowsList(params);
    setTvShows(tvShows?.results || []);
  };

  useEffect(() => {
    loadData(params);
  }, [params]);

  return (
    <GS.PageContainer>
      <C.TvShowsList tvShows={tvShows} />

      <UI.Pagination
        itemsPerPage={itemsPerPage}
        initialPage={page}
        setCurrentPage={setPage}
        totalItems={tvShows.length}
      />
    </GS.PageContainer>
  );
};

export default TvShowsListPage;
