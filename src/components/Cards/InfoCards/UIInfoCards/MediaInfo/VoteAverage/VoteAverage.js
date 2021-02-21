import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";

const VoteAverage = ({ voteAverage }) => {
  return (
    <S.Container voteAverage={voteAverage}>{voteAverage || "NR"}</S.Container>
  );
};

VoteAverage.propTypes = {
  voteAverage: PropTypes.number,
};

export default VoteAverage;
