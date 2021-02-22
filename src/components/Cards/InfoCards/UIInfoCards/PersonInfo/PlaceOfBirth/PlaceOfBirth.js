import React from "react";
import PropTypes from "prop-types";
import { useCountdownTimer } from "hooks";
import * as S from "./styles";
import * as UI from "components/UIComponents";

const PlaceOfBirth = ({ placeOfBirth = null }) => {
  const { countdown } = useCountdownTimer(9);

  if (countdown === 0 && placeOfBirth === null) placeOfBirth = "";
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
