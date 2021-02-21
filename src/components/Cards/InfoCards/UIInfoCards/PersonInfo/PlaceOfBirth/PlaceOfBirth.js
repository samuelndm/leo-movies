import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";
import * as UI from "components/UIComponents";

const PlaceOfBirth = ({ placeOfBirth = null }) => {
  return placeOfBirth !== null ? (
    <S.Container>
      <S.Title>Place of Birth</S.Title>
      <S.Content>{placeOfBirth || "*"}</S.Content>
    </S.Container>
  ) : (
    <UI.Skeleton
      variant='text'
      animation='wave'
      SkeletonStyle={S.SkeletonStyle}
    />
  );
};

PlaceOfBirth.propTypes = {
  placeOfBirth: PropTypes.string,
};

export default PlaceOfBirth;
