import React from "react";
import PropTypes from "prop-types";
import { useCountdownTimer } from "hooks";
import placeholder from "assets/images/vertical-placeholder.png";
import * as S from "./styles";
import * as C from "components";

const Image = ({ imageUrl }) => {
  const { countdown } = useCountdownTimer();

  return imageUrl || countdown === 0 ? (
    <S.Container>
      <S.Image src={imageUrl || placeholder} alt='Preview poster' />
    </S.Container>
  ) : (
    <C.UI.Skeleton
      variant='rect'
      animation='wave'
      SkeletonStyle={S.SkeletonStyle}
    />
  );
};

Image.propTypes = {
  imageUrl: PropTypes.any,
};

export default Image;
