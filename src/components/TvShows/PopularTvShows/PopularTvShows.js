import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";
import * as GS from "assets/styles/GlobalStyles";
import * as C from "components";
import * as Card from "components/Cards";

const PopularTvShows = ({ tvShows }) => {
  return (
    <S.Container>
      <GS.ContainerTitle>Most Popular TvShows</GS.ContainerTitle>

      <C.PreviewSlider
        previews={tvShows}
        PreviewCard={Card.PopularTvShowPreview}
      />
    </S.Container>
  );
};

PopularTvShows.propTypes = {
  tvShows: PropTypes.array,
};

export default PopularTvShows;
