import React from "react";
import PropTypes from "prop-types";
import { useCountdownTimer } from "hooks";
import * as S from "./styles";
import * as C from "components";

const GENDER_TYPES = {
  1: "Female",
  2: "Male",
};

const Gender = ({ gender }) => {
  const { countdown } = useCountdownTimer();

  return gender || countdown === 0 ? (
    <S.Container>
      <S.Title>Gender</S.Title>
      <S.Content>{GENDER_TYPES[gender] || "*"}</S.Content>
    </S.Container>
  ) : (
    <C.UI.Skeleton
      variant='text'
      animation='wave'
      SkeletonStyle={S.SkeletonStyle}
    />
  );
};

Gender.propTypes = {
  gender: PropTypes.number,
};

export default Gender;
