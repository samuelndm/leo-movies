import React, { useCallback, useEffect, useState } from "react";
import * as Service from "./HomePageServices";
import * as GS from "../../assets/styles/GlobalStyles";
import * as C from "../../components";

const HomePage = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [popularTvShows, setTopularTvShows] = useState([]);
  const [params] = useState({
    page: 3,
  });

  const loadData = useCallback(async () => {
    const movies = await Service.loadPopularMovies(params);
    const tvShows = await Service.loadPopularTvShows(params);

    setPopularMovies(movies);
    setTopularTvShows(tvShows);
  }, [params]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <GS.PageContainer>
      <C.PopularMovies movies={popularMovies} />
      <C.PopularTvShows tvShows={popularTvShows} />
    </GS.PageContainer>
  );
};

export default HomePage;
