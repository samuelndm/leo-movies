import React from "react";
import PropTypes from "prop-types";
import * as UI from "components/UIComponents";
import * as S from "./styles";

const GENDER_TYPES = {
  1: "Female",
  2: "Male",
};

const Gender = ({ gender = null }) => {
  return gender !== null ? (
    <S.Container>
      <S.Title>Gender</S.Title>
      <S.Content>{GENDER_TYPES[gender] || "*"}</S.Content>
    </S.Container>
  ) : (
    <UI.Skeleton
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
