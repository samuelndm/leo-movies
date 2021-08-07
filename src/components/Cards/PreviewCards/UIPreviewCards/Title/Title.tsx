import React from "react";
import PropTypes from "prop-types";
import { useCountdownTimer } from "hooks";
import * as S from "./styles";
import * as C from "components";

const Title = ({ title }) => {
  const { countdown } = useCountdownTimer();

  return title || countdown === 0 ? (
    <S.Container>{title || "*"}</S.Container>
  ) : (
    <C.UI.Skeleton variant='text' animation='wave' width='100%' />
  );
};

Title.propTypes = {
  title: PropTypes.string,
};

export default Title;
