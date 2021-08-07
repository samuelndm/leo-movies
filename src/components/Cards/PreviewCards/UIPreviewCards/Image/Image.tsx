import React from "react";
import PropTypes from "prop-types";
import { useCountdownTimer } from "hooks";
import placeholder from "assets/images/vertical-placeholder.png";
import * as S from "./styles";
import * as C from "components";

const Image = ({ imageUrl, redirectUrl }) => {
  const { countdown } = useCountdownTimer();

  return imageUrl || countdown === 0 ? (
    <S.Container>
      {
        <C.UI.LinkHandler url={redirectUrl}>
          <S.Image src={imageUrl || placeholder} alt='Preview poster' />
        </C.UI.LinkHandler>
      }
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
  redirectUrl: PropTypes.string,
};

export default Image;
