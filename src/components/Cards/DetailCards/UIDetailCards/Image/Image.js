import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Skeleton from "@material-ui/lab/Skeleton";
import placeholder from "assets/images/vertical-placeholder.png";
import * as S from "./styles";

const Image = ({ imageUrl }) => {
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // Just to make a cool effect with skeleton
    return setTimeout(() => {
      setUrl(imageUrl);
    }, 500);
  }, [imageUrl]);

  return (
    <S.Container>
      {url || url === "" ? (
        <S.Image src={url || placeholder} alt='Preview poster' />
      ) : (
        <Skeleton className='skeleton-body' variant='rect' animation='wave' />
      )}
    </S.Container>
  );
};

Image.propTypes = {
  imageUrl: PropTypes.any,
  redirectUrl: PropTypes.string,
};

export default Image;
