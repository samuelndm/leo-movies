import React from "react";
import PropTypes from "prop-types";
import * as UTIL from "utils/cardsUtil";
import * as S from "./styles";
import * as UI from "components/UIComponents";

const Genres = ({ genres = null }) => {
  return genres !== null ? (
    <S.Container>{UTIL.formatGenres(genres) || ""}</S.Container>
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
