import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";
import * as GS from "assets/styles/GlobalStyles";
import * as C from "components";
import * as Card from "components/Cards";

const MoviesSlider = ({ movies, slidesToShow, title }) => {
  return (
    <S.Container>
      {title && <GS.ContainerTitle>{title}</GS.ContainerTitle>}

      <C.PreviewsSlider
        previews={movies}
        PreviewCard={Card.MoviePreview}
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
