import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";
import * as GS from "assets/styles/GlobalStyles";

const MovieDetails = ({ movie }) => {
  return (
    <S.Container>
      <GS.ContainerTitle>{movie?.title || "*"}</GS.ContainerTitle>
    </S.Container>
  );
};

MovieDetails.propTypes = {
  movie: PropTypes.object,
};

export default MovieDetails;
