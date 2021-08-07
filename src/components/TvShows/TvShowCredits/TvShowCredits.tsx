import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import * as UTIL from "utils";
import * as S from "./styles";
import * as C from "components";

const SLIDES_TO_SHOW = 6;
const MAX_CAST = SLIDES_TO_SHOW * 3;
const MAX_CREW = SLIDES_TO_SHOW;

const TvShowCredits = ({ credits }) => {
  const [tvShowCredits, setTvShowCredits] = useState([]);

  useEffect(() => {
    const cast = credits?.cast?.slice(0, MAX_CAST) || [];
    const crew = credits?.crew?.slice(0, MAX_CREW) || [];

    const tvShowCast = UTIL.removeDuplicatesByKey([...cast, ...crew], "name");

    setTvShowCredits(tvShowCast);
  }, [credits]);

  return (
    <S.Container>
      <S.Title>Credits</S.Title>

      <C.PreviewsSlider
        previews={tvShowCredits}
        PreviewCard={C.Card.PersonPreview}
        slidesToShow={SLIDES_TO_SHOW}
      />
    </S.Container>
  );
};

TvShowCredits.propTypes = {
  credits: PropTypes.object,
};

export default TvShowCredits;
