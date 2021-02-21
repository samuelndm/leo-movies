import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { removeDuplicatesByKey } from "utils/utils";
import * as S from "./styles";
import * as C from "components";
import * as Card from "components/Cards";

const SLIDES_TO_SHOW = 6;
const MAX_CAST = SLIDES_TO_SHOW * 3;
const MAX_CREW = SLIDES_TO_SHOW * 3;

const PersonCredits = ({ credits }) => {
  const [personCredits, setPersonCredits] = useState([]);

  useEffect(() => {
    const cast = credits?.cast?.slice(0, MAX_CAST) || [];
    const crew = credits?.crew?.slice(0, MAX_CREW) || [];

    const personCredits = removeDuplicatesByKey([...cast, ...crew], "name");

    setPersonCredits(personCredits);
  }, [credits]);

  return (
    <S.Container>
      <S.Title>Movies and Tv Shows</S.Title>

      <C.PreviewsSlider
        previews={personCredits}
        PreviewCard={Card.MediaPreview}
        slidesToShow={SLIDES_TO_SHOW}
      />
    </S.Container>
  );
};

PersonCredits.propTypes = {
  credits: PropTypes.object,
};

export default PersonCredits;
