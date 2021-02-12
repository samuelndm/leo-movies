import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";
import * as GS from "../../../assets/styles/GlobalStyles";
import * as C from "../../";

const PopularMovies = ({ movies }) => {
  return (
    <S.Container>
      <GS.ContainerTitle>Most Popular Movies</GS.ContainerTitle>

      <C.PreviewsSlider previews={movies} />
    </S.Container>
  );
};

PopularMovies.propTypes = {
  movies: PropTypes.array,
};

export default PopularMovies;
