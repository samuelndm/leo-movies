import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";
import * as C from "components";

const TvShowsSlider = ({ tvShows, slidesToShow, title }) => {
  return (
    <S.Container>
      {title && <S.Title>{title}</S.Title>}

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
