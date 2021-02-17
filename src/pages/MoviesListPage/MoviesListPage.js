import React, { useEffect, useState } from "react";
import * as API from "services/Loaders";
import * as GS from "assets/styles/GlobalStyles";
import * as C from "components";
import * as UI from "components/UIComponents";

const MoviesListPage = () => {
  const itemsPerPage = 20;
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [params] = useState({
    page,
  });

  const loadData = async (params) => {
    const movies = await API.loadMoviesList(params);

    setMovies(movies?.result || []);
  };

  useEffect(() => {
    loadData(params);
  }, [params]);

  return (
    <GS.PageContainer>
      <C.MoviesList movies={movies} />

      <UI.Pagination
        itemsPerPage={itemsPerPage}
        initialPage={page}
        setCurrentPage={setPage}
        totalItems={movies.length}
      />
    </GS.PageContainer>
  );
};

export default MoviesListPage;
