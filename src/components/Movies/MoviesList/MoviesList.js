import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";
import * as GS from "assets/styles/GlobalStyles";
import * as Card from "components/Cards";

const MoviesList = ({ movies }) => {
  return (
    <S.Container>
      <GS.FlexContainer>
        {movies?.map((movie, index) => (
          <GS.FlexItem
            lg={2}
            xs={12}
            key={`moviePreview-${movie?.id || index}`}
          >
            <Card.MoviePreview preview={movie} />
          </GS.FlexItem>
        ))}
      </GS.FlexContainer>
    </S.Container>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array,
};

export default MoviesList;
