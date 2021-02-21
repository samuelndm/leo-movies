import React from "react";
import PropTypes from "prop-types";
import placeholder from "assets/images/vertical-placeholder.png";
import * as S from "./styles";
import * as UI from "components/UIComponents";

const Image = ({ imageUrl = null }) => {
  return (
    <S.Container>
      {imageUrl !== null ? (
        <S.Image src={imageUrl || placeholder} alt='Preview poster' />
      ) : (
        <UI.Skeleton
          variant='rect'
          animation='wave'
          SkeletonStyle={S.SkeletonStyle}
        />
      )}
    </S.Container>
  );
};

Image.propTypes = {
  imageUrl: PropTypes.any,
};

export default Image;
