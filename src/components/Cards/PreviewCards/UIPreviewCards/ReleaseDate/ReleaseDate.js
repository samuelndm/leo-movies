import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";

const ReleaseDate = ({ releaseDate }) => {
  return <S.Container>{releaseDate || "*"}</S.Container>;
};

ReleaseDate.propTypes = {
  releaseDate: PropTypes.string,
};

export default ReleaseDate;
