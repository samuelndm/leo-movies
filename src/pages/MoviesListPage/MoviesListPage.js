import React, { useEffect, useState } from "react";
import * as API from "services/Loaders";
import * as UTIl from "utils";
import * as S from "./styles";
import * as C from "components";

const MoviesListPage = () => {
  const itemsPerPage = 20;
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState(UTIl.createEmptyArray(itemsPerPage));
  const [totalItems, setTotalItems] = useState(0);
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState(UTIl.Contants.SORT_BY.POPULARITY_DESC);
  const [searched, setSearched] = useState("");
  const [params, setParams] = useState(null);

  const loadData = async (params) => {
    setIsLoading(true);
    const response = params.query
      ? await API.loadSearchedMovies(params)
      : await API.loadMoviesList(params);

    setMovies(response?.results || []);
    setTotalItems(response?.total_results || 0);
    setIsLoading(false);
  };

  const updateParams = (page, sortBy, searched) => {
    setParams((params) => ({
      ...params,
      page,
      sort_by: sortBy,
      query: searched,
    }));
  };

  useEffect(() => {
    return params && loadData(params);
  }, [params]);

  useEffect(() => {
    return updateParams(page, sortBy, searched);
  }, [page, sortBy, searched]);

  return (
    <S.Container>
      <S.Title>Movies</S.Title>

      <S.Options>
        <C.UI.Search
          placeholder='Search a Movie'
          isLoading={isLoading}
          onChange={setSearched}
          style={{ margin: "40px 7px 10px" }}
        />

        <C.UI.Select
          options={UTIl.Contants.SORT_BY_LIST}
          defaultValue={sortBy}
          label='Sort Results By'
          onChange={setSortBy}
        />
      </S.Options>

      <C.MoviesList movies={movies} />

      <C.UI.Pagination
        itemsPerPage={itemsPerPage}
        initialPage={page}
        setCurrentPage={setPage}
        totalItems={totalItems}
      />
    </S.Container>
  );
};

export default MoviesListPage;
