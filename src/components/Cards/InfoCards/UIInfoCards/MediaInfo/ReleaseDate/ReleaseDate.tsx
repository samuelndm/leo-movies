import React from "react";
import PropTypes from "prop-types";
import { useCountdownTimer } from "hooks";
import * as UTIL from "utils";
import * as S from "./styles";
import * as C from "components";

const ReleaseDate = ({ releaseDate }) => {
  const { countdown } = useCountdownTimer();

  return releaseDate || countdown === 0 ? (
    <S.Container>
      {UTIL.Cards.formatDateToSlash(releaseDate) || "*"}
    </S.Container>
  ) : (
    <C.UI.Skeleton
      variant='text'
      animation='wave'
      SkeletonStyle={S.SkeletonStyle}
    />
  );
};

ReleaseDate.propTypes = {
  releaseDate: PropTypes.string,
};

export default ReleaseDate;
