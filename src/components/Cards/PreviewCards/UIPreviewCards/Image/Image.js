import React from "react";
import PropTypes from "prop-types";
import placeholder from "assets/images/vertical-placeholder.png";
import { useCountdownTimer } from "hooks";
import * as S from "./styles";
import * as UI from "components/UIComponents";

const Image = ({ imageUrl = null, redirectUrl }) => {
  const { countdown } = useCountdownTimer(9);

  if (countdown === 0 && imageUrl === null) imageUrl = "";
  return imageUrl !== null ? (
    <S.Container>
      {
        <UI.LinkHandler url={redirectUrl}>
          <S.Image src={imageUrl || placeholder} alt='Preview poster' />
        </UI.LinkHandler>
      }
    </S.Container>
  ) : (
    <UI.Skeleton
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
