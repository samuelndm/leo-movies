import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";
import * as GS from "assets/styles/GlobalStyles";
import * as C from "components";
import * as Card from "components/Cards";

const PopularMovies = ({ movies }) => {
  return (
    <S.Container>
      <GS.ContainerTitle>Most Popular Movies</GS.ContainerTitle>

      <C.PreviewSlider
        previews={movies}
        PreviewCard={Card.PopularMoviePreview}
      />
    </S.Container>
  );
};

PopularMovies.propTypes = {
  movies: PropTypes.array,
};

export default PopularMovies;
