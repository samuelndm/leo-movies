import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";
import * as Card from "components/Cards";

const MoviesList = ({ movies }) => {
  return (
    <S.Container>
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
