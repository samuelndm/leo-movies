import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";
import * as GS from "assets/styles/GlobalStyles";

const MoviesList = ({ array }) => {
  return (
    <S.Container>
      <GS.ContainerTitle>Movies</GS.ContainerTitle>
    </S.Container>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array,
};

export default MoviesList;
