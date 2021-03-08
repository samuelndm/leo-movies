import React, { useEffect, useState } from "react";
import * as API from "services/Loaders";
import * as UTIL from "utils";
import * as S from "./styles";
import * as C from "components";

const TvShowsListPage = () => {
  const itemsPerPage = 20;
  const [isLoading, setIsLoading] = useState(false);
  const [tvShows, setTvShows] = useState(UTIL.createArray(itemsPerPage));
  const [totalItems, setTotalItems] = useState(0);
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState(UTIL.Contants.SORT_BY.POPULARITY_DESC);
  const [searched, setSearched] = useState("");
  const [params, setParams] = useState(null);

  const loadData = async (params) => {
    setIsLoading(true);
    const response = params.query
      ? await API.loadSearchedTvShows(params)
      : await API.loadTvShowsList(params);

    setTvShows(response?.results || []);
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
      <S.Title>Tv Shows</S.Title>
      <S.Options>
        <C.UI.Search
          placeholder='Search a Tv Serie'
          isLoading={isLoading}
          onChange={setSearched}
          style={{ margin: "40px 7px 10px" }}
        />

        <C.UI.Select
          options={UTIL.Contants.SORT_BY_LIST}
          defaultValue={sortBy}
          label='Sort Results By'
          onChange={setSortBy}
        />
      </S.Options>

      <C.TvShowsList tvShows={tvShows} />

      <C.UI.Pagination
        itemsPerPage={20}
        initialPage={page}
        setCurrentPage={setPage}
        totalItems={totalItems}
      />
    </S.Container>
  );
};

export default TvShowsListPage;
