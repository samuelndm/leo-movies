import React, { useEffect, useState } from "react";
import * as API from "services/Loaders";
import * as GS from "assets/styles/GlobalStyles";
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

    setMovie({ ...movie, videos });
    setCredits(credits);
  };

  useEffect(() => {
    return loadData(movieId);
  }, [movieId]);

  return (
    <GS.PageContainer>
      <C.MovieInfo movie={movie} />
      <C.MovieCredits credits={credits} />
    </GS.PageContainer>
  );
};

export default MovieInternalPage;
