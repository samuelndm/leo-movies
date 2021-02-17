import React, { useEffect, useState } from "react";
import * as Service from "services/Loaders";
import * as GS from "assets/styles/GlobalStyles";
import * as C from "components";

const HomePage = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [popularTvShows, setTopularTvShows] = useState([]);
  const [popularPersons, setPopularPersons] = useState([]);
  const [params] = useState({
    page: 1,
  });

  const loadData = async (params) => {
    const movies = await Service.loadPopularMovies(params);
    const tvShows = await Service.loadPopularTvShows(params);
    const persons = await Service.loadPopularPersons(params);

    setPopularMovies(movies);
    setTopularTvShows(tvShows);
    setPopularPersons(persons);
  };

  useEffect(() => {
    loadData(params);
  }, [params]);

  return (
    <GS.PageContainer>
      <C.PopularMovies movies={popularMovies} />
      <C.PopularTvShows tvShows={popularTvShows} />
      <C.PopularPersons persons={popularPersons} />
    </GS.PageContainer>
  );
};

export default HomePage;
