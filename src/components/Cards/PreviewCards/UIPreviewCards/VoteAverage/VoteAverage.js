import React from "react";
import PropTypes from "prop-types";
import Skeleton from "@material-ui/lab/Skeleton";
import * as S from "./styles";

const VoteAverage = ({ voteAverage = null, style }) => {
  return (
    <S.Container voteAverage={voteAverage} style={style}>
      {voteAverage !== null ? (
        voteAverage || "NR"
      ) : (
        <Skeleton className='skeleton-body' variant='circle' animation='wave' />
      )}
    </S.Container>
  );
};

VoteAverage.propTypes = {
  voteAverage: PropTypes.number,
  style: PropTypes.object,
};

export default VoteAverage;
