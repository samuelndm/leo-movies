import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";

const VoteAverage = ({ voteAverage, style }) => {
  return (
    <S.Container voteAverage={voteAverage} style={style}>
      {voteAverage || "NR"}
    </S.Container>
  );
};

VoteAverage.propTypes = {
  voteAverage: PropTypes.number,
  style: PropTypes.object,
};

export default VoteAverage;
