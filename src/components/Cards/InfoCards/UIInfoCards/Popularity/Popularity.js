import React from "react";
import PropTypes from "prop-types";
import { useCountdownTimer } from "hooks";
import * as S from "./styles";
import * as UI from "components/UIComponents";

const Popularity = ({ popularity = null }) => {
  const { countdown } = useCountdownTimer(9);

  if (countdown === 0 && popularity === null) popularity = "";
  return popularity !== null ? (
    <S.Container popularity={popularity}>
      {popularity?.toFixed(1) || "NR"}
    </S.Container>
  ) : (
    <UI.Skeleton
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
