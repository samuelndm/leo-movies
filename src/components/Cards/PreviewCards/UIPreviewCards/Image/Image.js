import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Skeleton from "@material-ui/lab/Skeleton";
import placeholder from "assets/images/vertical-placeholder.png";
import * as S from "./styles";
import * as UI from "components/UIComponents";

const Image = ({ imageUrl, redirectUrl }) => {
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // Just to make a cool effect with skeleton
    setTimeout(() => {
      setUrl(imageUrl);
    }, 500);
  }, [imageUrl]);

  return (
    <S.Container>
      {url || url === "" ? (
        <UI.LinkHandler url={redirectUrl}>
          <S.Image src={url || placeholder} alt='Preview poster' />
        </UI.LinkHandler>
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
