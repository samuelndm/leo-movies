import React from "react";
import PropTypes from "prop-types";
import { useCountdownTimer } from "hooks";
import * as S from "./styles";
import * as C from "components";

const ReleaseDate = ({ releaseDate }) => {
  const { countdown } = useCountdownTimer();

  return releaseDate || countdown === 0 ? (
    <S.Container>{releaseDate || "*"}</S.Container>
  ) : (
    <C.UI.Skeleton variant='text' animation='wave' width='100%' />
  );
};

ReleaseDate.propTypes = {
  releaseDate: PropTypes.string,
};

export default ReleaseDate;
