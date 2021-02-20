import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";
import * as Card from "components/Cards";

const TvShowDetails = ({ tvShow }) => {
  return (
    <S.Container>
      <Card.MovieDetails content={tvShow} />
    </S.Container>
  );
};

TvShowDetails.propTypes = {
  tvShow: PropTypes.object,
};

export default TvShowDetails;
