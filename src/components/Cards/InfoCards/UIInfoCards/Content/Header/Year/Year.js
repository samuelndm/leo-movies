import React from "react";
import PropTypes from "prop-types";
import * as UTIL from "utils/cardsUtil";
import * as S from "./styles";

const Year = ({ date = null }) => {
  return (
    <S.Container>{`( ${UTIL.formatDateToYear(date)} )` || "*"}</S.Container>
  );
};

Year.propTypes = {
  date: PropTypes.string,
};

export default Year;
