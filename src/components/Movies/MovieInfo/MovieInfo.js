import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";
import * as Card from "components/Cards";

const MovieInfo = ({ movie }) => {
  return (
    <S.Container>
      <S.Content>
        <Card.MovieInfo content={movie} />
      </S.Content>
    </S.Container>
  );
};

MovieInfo.propTypes = {
  movie: PropTypes.object,
};

export default MovieInfo;
