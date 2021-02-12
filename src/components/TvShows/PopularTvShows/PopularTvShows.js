import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";
import * as GS from "../../../assets/styles/GlobalStyles";
import * as C from "../../";

const PopularTvShows = ({ tvShows }) => {
  return (
    <S.Container>
      <GS.ContainerTitle>Most Popular TvShows</GS.ContainerTitle>

      <C.PreviewsSlider previews={tvShows} />
    </S.Container>
  );
};

PopularTvShows.propTypes = {
  tvShows: PropTypes.array,
};

export default PopularTvShows;
