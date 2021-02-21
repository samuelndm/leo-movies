import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";

const VoteAverageAction = ({ voteAverage, style }) => {
  return (
    <S.Container voteAverage={voteAverage} style={style}>
      {voteAverage || "NR"}
    </S.Container>
  );
};

VoteAverageAction.propTypes = {
  voteAverage: PropTypes.number,
  style: PropTypes.object,
};

export default VoteAverageAction;
