import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";
import * as GS from "assets/styles/GlobalStyles";
import * as C from "components";

const TvShowsSlider = ({ tvShows, slidesToShow, title }) => {
  return (
    <S.Container>
      {title && <GS.ContainerTitle>{title}</GS.ContainerTitle>}

      <C.PreviewsSlider
        previews={tvShows}
        PreviewCard={C.Card.TvShowPreview}
        slidesToShow={slidesToShow}
        showVoteAverage
      />
    </S.Container>
  );
};

TvShowsSlider.propTypes = {
  tvShows: PropTypes.array,
  title: PropTypes.string,
  slidesToShow: PropTypes.number,
};

export default TvShowsSlider;
