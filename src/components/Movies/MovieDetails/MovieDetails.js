import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";
import * as Card from "components/Cards";

const MovieDetails = ({ movie }) => {
  return (
    <S.Container>
      <Card.MovieDetails content={movie} />
    </S.Container>
  );
};

MovieDetails.propTypes = {
  movie: PropTypes.object,
};

export default MovieDetails;
