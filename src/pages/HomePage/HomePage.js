import React, { useEffect, useState } from "react";
import { resizeArray } from "utils/utils";
import * as API from "services/Loaders";
import * as S from "./styles";
import * as C from "components";

const MAX_ITEMS = 12;

const HomePage = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [popularTvShows, setTopularTvShows] = useState([]);
  const [params] = useState({
    page: 1,
  });

  const loadData = async (params) => {
    const allResponses = await Promise.all([
      API.loadPopularMovies(params),
      API.loadPopularTvShows(params),
    ]);

    const movies = allResponses[0]?.results || [];
    const tvShows = allResponses[1]?.results || [];

    const resizedMovies = resizeArray(movies, MAX_ITEMS);
    const tvShowsMovies = resizeArray(tvShows, MAX_ITEMS);

    setPopularMovies(resizedMovies);
    setTopularTvShows(tvShowsMovies);
  };

  useEffect(() => {
    return loadData(params);
  }, [params]);

  return (
    <S.Container>
      <C.MoviesSlider
        movies={popularMovies}
        slidesToShow={6}
        title='Popular Movies'
      />

      <C.TvShowsSlider
        tvShows={popularTvShows}
        slidesToShow={6}
        title='Popular Tv Shows'
      />
    </S.Container>
  );
};

export default HomePage;
