import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";
import * as GS from "assets/styles/GlobalStyles";

const TvShowDetails = ({ tvShow }) => {
  return (
    <S.Container>
      <GS.ContainerTitle>{tvShow?.name || "*"}</GS.ContainerTitle>
    </S.Container>
  );
};

TvShowDetails.propTypes = {
  tvShow: PropTypes.object,
};

export default TvShowDetails;
