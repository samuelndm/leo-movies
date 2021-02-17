import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";
import * as GS from "assets/styles/GlobalStyles";
import * as Card from "components/Cards";

const MoviesList = ({ movies }) => {
  console.log("movies", movies);

  return (
    <S.Container>
      <GS.ContainerTitle>Movies</GS.ContainerTitle>

      <S.Movies>
        {movies?.map((movie, index) => (
          <Card.PreviewMovie
            preview={movie}
            key={`previewMovie-${movie?.id || index}`}
          />
        ))}
      </S.Movies>
    </S.Container>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array,
};

export default MoviesList;
