import React from "react";
import PropTypes from "prop-types";
import { useCountdownTimer } from "hooks";
import * as UTIL from "utils";
import * as S from "./styles";
import * as C from "components";

const Genres = ({ genres }) => {
  const { countdown } = useCountdownTimer();

  return genres || countdown === 0 ? (
    <S.Container>{UTIL.Cards.formatGenres(genres) || "*"}</S.Container>
  ) : (
    <C.UI.Skeleton
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
