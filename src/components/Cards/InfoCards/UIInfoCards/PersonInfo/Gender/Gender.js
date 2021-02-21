import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";

const GENDER_TYPES = {
  1: "Female",
  2: "Male",
};

const Gender = ({ gender = null }) => {
  return (
    <S.Container>
      <S.Title>Gender</S.Title>
      <S.Content>{GENDER_TYPES[gender] || "*"}</S.Content>
    </S.Container>
  );
};

Gender.propTypes = {
  gender: PropTypes.string,
};

export default Gender;
