import React from "react";
import PropTypes from "prop-types";
import { useCountdownTimer } from "hooks";
import * as S from "./styles";
import * as UI from "components/UIComponents";

const Title = ({ title }) => {
  const { countdown } = useCountdownTimer();

  return title || countdown === 0 ? (
    <S.Container>{title || "*"}</S.Container>
  ) : (
    <UI.Skeleton
      variant='text'
      animation='wave'
      SkeletonStyle={S.SkeletonStyle}
    />
  );
};

Title.propTypes = {
  title: PropTypes.string,
};

export default Title;
