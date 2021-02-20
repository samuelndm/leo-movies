import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";

const Popularity = ({ popularity }) => {
  return <S.Container>{popularity?.toFixed(1) || "NR"}</S.Container>;
};

Popularity.propTypes = {
  popularity: PropTypes.number,
};

export default Popularity;
