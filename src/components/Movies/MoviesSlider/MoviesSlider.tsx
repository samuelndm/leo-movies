import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";
import * as C from "components";

const MoviesSlider = ({ movies, slidesToShow, title }) => {
  return (
    <S.Container>
      {title && <S.Title>{title}</S.Title>}

      <C.PreviewsSlider
        previews={movies}
        PreviewCard={C.Card.MoviePreview}
        slidesToShow={slidesToShow}
        showVoteAverage
      />
    </S.Container>
  );
};

MoviesSlider.propTypes = {
  movies: PropTypes.array,
  title: PropTypes.string,
  slidesToShow: PropTypes.number,
};

export default MoviesSlider;
