import React from "react";
import PropTypes from "prop-types";
import { useCountdownTimer } from "hooks";
import * as S from "./styles";
import * as UI from "components/UIComponents";

const ReleaseDate = ({ releaseDate = null }) => {
  const { countdown } = useCountdownTimer(9);

  if (countdown === 0 && releaseDate === null) releaseDate = "";
  return releaseDate !== null ? (
    <S.Container>{releaseDate || "*"}</S.Container>
  ) : (
    <UI.Skeleton variant='text' animation='wave' width='100%' />
  );
};

ReleaseDate.propTypes = {
  releaseDate: PropTypes.string,
};

export default ReleaseDate;
