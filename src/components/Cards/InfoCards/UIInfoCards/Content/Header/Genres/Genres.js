import React from "react";
import PropTypes from "prop-types";
import * as UTIL from "utils/cardsUtil";
import * as S from "./styles";

const Genres = ({ genres }) => {
  return <S.Container>{UTIL.formatGenres(genres) || ""}</S.Container>;
};

Genres.propTypes = {
  genres: PropTypes.array,
};

export default Genres;
