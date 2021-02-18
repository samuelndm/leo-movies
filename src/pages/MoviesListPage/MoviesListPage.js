import React, { useEffect, useState } from "react";
import * as API from "services/Loaders";
import * as GS from "assets/styles/GlobalStyles";
import * as C from "components";
import * as UI from "components/UIComponents";

const MoviesListPage = () => {
  const itemsPerPage = 20;
  const [movies, setMovies] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [page, setPage] = useState(1);
  const [params, setParams] = useState({
    page,
    sort_by: "title.asc",
  });

  const loadData = async (params) => {
    const response = await API.loadMoviesList(params);

    setMovies(response?.results || []);
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
      <GS.PageTitle>Movies</GS.PageTitle>

      <C.MoviesList movies={movies} />

      <UI.Pagination
        itemsPerPage={itemsPerPage}
        initialPage={page}
        setCurrentPage={setPage}
        totalItems={totalItems}
      />
    </GS.PageContainer>
  );
};

export default MoviesListPage;
