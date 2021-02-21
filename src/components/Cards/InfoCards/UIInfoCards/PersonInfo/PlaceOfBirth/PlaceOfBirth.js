import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";

const PlaceOfBirth = ({ placeOfBirth = null }) => {
  return (
    <S.Container>
      <S.Title>Place of Birth</S.Title>
      <S.Content>{placeOfBirth || "*"}</S.Content>
    </S.Container>
  );
};

PlaceOfBirth.propTypes = {
  placeOfBirth: PropTypes.string,
};

export default PlaceOfBirth;
