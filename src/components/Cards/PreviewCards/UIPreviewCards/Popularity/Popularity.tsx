import React from "react";
import PropTypes from "prop-types";
import { useCountdownTimer } from "hooks";
import * as S from "./styles";
import * as C from "components";

const Popularity = ({ popularity }) => {
  const { countdown } = useCountdownTimer();

  return popularity || countdown === 0 ? (
    <S.Container popularity={popularity}>
      {popularity?.toFixed(1) || "NR"}
    </S.Container>
  ) : (
    <C.UI.Skeleton
      variant='circle'
      animation='wave'
      SkeletonStyle={S.SkeletonStyle}
    />
  );
};

Popularity.propTypes = {
  popularity: PropTypes.number,
};

export default Popularity;
