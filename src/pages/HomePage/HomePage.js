import React, { useEffect, useState } from "react";
import * as API from "services/Loaders";
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
    const allResponses = await Promise.all([
      API.loadPopularMovies(params),
      API.loadPopularTvShows(params),
      API.loadPopularPersons(params),
    ]);

    const movies = allResponses[0]?.results || [];
    const tvShows = allResponses[1].results || [];
    const persons = allResponses[2].results || [];

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
