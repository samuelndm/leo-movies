import React, { useEffect, useState } from "react";
import { createEmptyArray } from "utils/utils";
import { SORT_BY, SORT_BY_LIST } from "utils/constants";
import * as API from "services/Loaders";
import * as GS from "assets/styles/GlobalStyles";
import * as C from "components";
import * as UI from "components/UIComponents";

const MoviesListPage = () => {
  const itemsPerPage = 20;
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState(createEmptyArray(itemsPerPage));
  const [totalItems, setTotalItems] = useState(0);
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState(SORT_BY.POPULARITY_DESC);
  const [searched, setSearched] = useState("");
  const [params, setParams] = useState({
    page,
    sort_by: sortBy,
    query: searched,
  });

  const loadData = async (params) => {
    setIsLoading(true);
    const response = params.query
      ? await API.loadSearchedMovies(params)
      : await API.loadMoviesList(params);

    setMovies(response?.results || []);
    setTotalItems(response?.total_results || 0);
    setIsLoading(false);
  };

  useEffect(() => {
    return loadData(params);
  }, [params]);

  useEffect(() => {
    return setParams((params) => ({
      ...params,
      page,
      sort_by: sortBy,
      query: searched,
    }));
  }, [page, sortBy, searched]);

  return (
    <GS.PageContainer>
      <GS.PageTitle>Movies</GS.PageTitle>

      <GS.PageOptions>
        <UI.Search
          placeholder='Search a Movie'
          isLoading={isLoading}
          onChange={setSearched}
          style={{ margin: "40px 7px 10px" }}
        />

        <UI.Select
          options={SORT_BY_LIST}
          defaultValue={sortBy}
          label='Sort Results By'
          onChange={setSortBy}
        />
      </GS.PageOptions>

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
