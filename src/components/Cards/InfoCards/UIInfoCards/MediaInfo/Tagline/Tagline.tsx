import React from "react";
import PropTypes from "prop-types";
import { useCountdownTimer } from "hooks";
import * as S from "./styles";
import * as C from "components";

const Tagline = ({ tagline }) => {
  const { countdown } = useCountdownTimer();

  return tagline || countdown === 0 ? (
    <S.Container>{tagline || ""}</S.Container>
  ) : (
    <C.UI.Skeleton
      variant='text'
      animation='wave'
      SkeletonStyle={S.SkeletonStyle}
    />
  );
};

Tagline.propTypes = {
  tagline: PropTypes.string,
};

export default Tagline;
