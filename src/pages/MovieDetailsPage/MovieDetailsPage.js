import React, { useEffect, useState } from "react";
import * as API from "services/Loaders";
import * as GS from "assets/styles/GlobalStyles";
import * as C from "components";

const MovieDetailsPage = ({ match }) => {
  const [movieId] = useState(match?.params?.id);
  const [movie, setMovie] = useState({});

  const loadData = async (movieId) => {
    const movie = await API.loadMovieDetailsById(movieId);
    setMovie(movie);
  };

  useEffect(() => {
    return loadData(movieId);
  }, [movieId]);

  return (
    <GS.PageContainer>
      <C.MovieDetails movie={movie} />
    </GS.PageContainer>
  );
};

export default MovieDetailsPage;
