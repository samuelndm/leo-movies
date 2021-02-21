import React from "react";
import PropTypes from "prop-types";
import Skeleton from "@material-ui/lab/Skeleton";
import placeholder from "assets/images/vertical-placeholder.png";
import * as S from "./styles";
import * as UI from "components/UIComponents";

const Image = ({ imageUrl = null, redirectUrl }) => {
  return (
    <S.Container>
      {imageUrl !== null ? (
        <UI.LinkHandler url={redirectUrl}>
          <S.Image src={imageUrl || placeholder} alt='Preview poster' />
        </UI.LinkHandler>
      ) : (
        <Skeleton className='skeleton' variant='rect' animation='wave' />
      )}
    </S.Container>
  );
};

Image.propTypes = {
  imageUrl: PropTypes.any,
  redirectUrl: PropTypes.string,
};

export default Image;
