import React from "react";
import PropTypes from "prop-types";
import { resizeArray } from "utils/utils";
import * as S from "./styles";
import * as GS from "assets/styles/GlobalStyles";
import * as C from "components";
import * as Card from "components/Cards";

const MAX_AMOUNT = 9;

const PopularMovies = ({ movies }) => {
  return (
    <S.Container>
      <GS.ContainerTitle>Most Popular Movies</GS.ContainerTitle>

      <C.PreviewSlider
        previews={resizeArray(movies, MAX_AMOUNT)}
        PreviewCard={Card.PopularMoviePreview}
      />
    </S.Container>
  );
};

PopularMovies.propTypes = {
  movies: PropTypes.array,
};

export default PopularMovies;
