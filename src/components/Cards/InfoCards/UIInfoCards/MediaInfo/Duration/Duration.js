import React from "react";
import PropTypes from "prop-types";
import * as UTIL from "utils/cardsUtil";
import * as S from "./styles";

export const Duration = ({ duration }) => {
  return <S.Container>{UTIL.formatDuration(duration) || ""}</S.Container>;
};

Duration.propTypes = {
  duration: PropTypes.number,
};

export default Duration;
