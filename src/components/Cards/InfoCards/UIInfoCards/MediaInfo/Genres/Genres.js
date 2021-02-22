import React from "react";
import PropTypes from "prop-types";
import { useCountdownTimer } from "hooks";
import * as UTIL from "utils/cardsUtil";
import * as S from "./styles";
import * as UI from "components/UIComponents";

const Genres = ({ genres }) => {
  const { countdown } = useCountdownTimer();

  return genres || countdown === 0 ? (
    <S.Container>{UTIL.formatGenres(genres) || "*"}</S.Container>
  ) : (
    <UI.Skeleton
      variant='text'
      animation='wave'
      SkeletonStyle={S.SkeletonStyle}
    />
  );
};

Genres.propTypes = {
  genres: PropTypes.array,
};

export default Genres;
