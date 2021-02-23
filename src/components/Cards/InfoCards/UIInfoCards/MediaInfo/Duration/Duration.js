import React from "react";
import PropTypes from "prop-types";
import { useCountdownTimer } from "hooks";
import * as UTIL from "utils";
import * as S from "./styles";
import * as C from "components";

export const Duration = ({ duration }) => {
  const { countdown } = useCountdownTimer();

  return duration || countdown === 0 ? (
    <S.Container>{UTIL.Cards.formatDuration(duration) || "*"}</S.Container>
  ) : (
    <C.UI.Skeleton
      variant='text'
      animation='wave'
      SkeletonStyle={S.SkeletonStyle}
    />
  );
};

Duration.propTypes = {
  duration: PropTypes.number,
};

export default Duration;
