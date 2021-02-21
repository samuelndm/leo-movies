import React from "react";
import PropTypes from "prop-types";
import Skeleton from "@material-ui/lab/Skeleton";
import placeholder from "assets/images/vertical-placeholder.png";
import * as S from "./styles";

const Image = ({ imageUrl = null }) => {
  return (
    <S.Container>
      {imageUrl !== null ? (
        <S.Image src={imageUrl || placeholder} alt='Preview poster' />
      ) : (
        <Skeleton className='skeleton' variant='rect' animation='wave' />
      )}
    </S.Container>
  );
};

Image.propTypes = {
  imageUrl: PropTypes.any,
};

export default Image;
