import React from "react";
import PropTypes from "prop-types";
import { useCountdownTimer } from "hooks";
import * as S from "./styles";
import * as UI from "components/UIComponents";

const VoteAverage = ({ voteAverage = null }) => {
  const { countdown } = useCountdownTimer(9);

  if (countdown === 0 && voteAverage === null) voteAverage = "";
  return voteAverage !== null ? (
    <S.Container voteAverage={voteAverage}>{voteAverage || "NR"}</S.Container>
  ) : (
    <UI.Skeleton
      variant='circle'
      animation='wave'
      SkeletonStyle={S.SkeletonStyle}
    />
  );
};

VoteAverage.propTypes = {
  voteAverage: PropTypes.number,
};

export default VoteAverage;
