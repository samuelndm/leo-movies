import React, { useEffect, useState } from "react";
import * as API from "services/Loaders";
import * as GS from "assets/styles/GlobalStyles";
import * as C from "components";
import { resizeArray } from "utils/utils";

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
    <GS.PageContainer>
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
    </GS.PageContainer>
  );
};

export default HomePage;