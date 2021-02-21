import React from "react";
import PropTypes from "prop-types";
import * as UTIL from "utils/cardsUtil";
import * as S from "./styles";

const ReleaseDate = ({ releaseDate }) => {
  return <S.Container>{UTIL.formatDateToSlash(releaseDate) || ""}</S.Container>;
};

ReleaseDate.propTypes = {
  releaseDate: PropTypes.string,
};

export default ReleaseDate;
