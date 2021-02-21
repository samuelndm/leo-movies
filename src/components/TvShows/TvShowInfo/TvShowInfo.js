import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";
import * as Card from "components/Cards";

const TvShowInfo = ({ tvShow }) => {
  return (
    <S.Container>
      <S.Content>
        <Card.TvShowInfo content={tvShow} />
      </S.Content>
    </S.Container>
  );
};

TvShowInfo.propTypes = {
  tvShow: PropTypes.object,
};

export default TvShowInfo;
