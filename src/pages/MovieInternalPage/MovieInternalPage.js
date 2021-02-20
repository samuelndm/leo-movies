import React, { useEffect, useState } from "react";
import * as API from "services/Loaders";
import * as GS from "assets/styles/GlobalStyles";
import * as C from "components";

const MovieInternalPage = ({ match }) => {
  const [movieId] = useState(match?.params?.id);
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState({});

  const loadData = async (movieId) => {
    const movie = await API.loadMovieDetailsById(movieId);
    const credits = await API.loadMovieCreditsById(movieId);

    setMovie(movie);
    setCredits(credits);
  };

  useEffect(() => {
    return loadData(movieId);
  }, [movieId]);

  return (
    <GS.PageContainer>
      <C.MovieDetails movie={movie} />
      <C.MovieCredits credits={credits} />
    </GS.PageContainer>
  );
};

export default MovieInternalPage;
