import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";
import * as C from "components";

const MoviesList = ({ movies }) => {
  return (
    <S.Container>
      <S.FlexContainer>
        {movies?.map((movie, index) => (
          <S.FlexItem
            lg={2}
            xs={12}
            margin='15px'
            key={`moviePreview-${movie?.id || index}`}
          >
            <C.Card.MoviePreview preview={movie} showVoteAverage />
          </S.FlexItem>
        ))}
      </S.FlexContainer>
    </S.Container>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array,
};

export default MoviesList;
