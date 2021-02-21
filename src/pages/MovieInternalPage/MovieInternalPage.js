import React, { useEffect, useState } from "react";
import * as API from "services/Loaders";
import * as S from "./styles";
import * as C from "components";

const MovieInternalPage = ({ match }) => {
  const [movieId] = useState(match?.params?.id);
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState(null);

  const loadData = async (movieId) => {
    const allResponses = await Promise.all([
      API.loadMovieById(movieId),
      API.loadMovieVideosById(movieId),
      API.loadMovieCreditsById(movieId),
    ]);

    const movie = allResponses[0];
    const videos = allResponses[1];
    const credits = allResponses[2];

    setTimeout(() => {
      // Just to make a cool effect with skeleton ^^
      setMovie({ ...movie, videos });
      setCredits(credits);
    }, 1000);
  };

  useEffect(() => {
    return loadData(movieId);
  }, [movieId]);

  return (
    <S.Container>
      <C.MovieInfo movie={movie} />
      <C.MovieCredits credits={credits} />
    </S.Container>
  );
};

export default MovieInternalPage;
