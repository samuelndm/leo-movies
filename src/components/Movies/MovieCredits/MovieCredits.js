import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { removeDuplicatesByKey } from "utils/utils";
import * as S from "./styles";
import * as C from "components";
import * as Card from "components/Cards";

const SLIDES_TO_SHOW = 6;
const MAX_CAST = SLIDES_TO_SHOW * 3;
const MAX_CREW = SLIDES_TO_SHOW;

const MovieCredits = ({ credits }) => {
  const [movieCredits, setMovieCredits] = useState([]);

  useEffect(() => {
    const cast = credits?.cast?.slice(0, MAX_CAST) || [];
    const crew = credits?.crew?.slice(0, MAX_CREW) || [];

    const movieCast = removeDuplicatesByKey([...cast, ...crew], "name");

    setMovieCredits(movieCast);
  }, [credits]);

  return (
    <S.Container>
      <S.Title>Credits</S.Title>

      <C.PreviewsSlider
        previews={movieCredits}
        PreviewCard={Card.PersonPreview}
        slidesToShow={SLIDES_TO_SHOW}
      />
    </S.Container>
  );
};

MovieCredits.propTypes = {
  credits: PropTypes.object,
};

export default MovieCredits;
