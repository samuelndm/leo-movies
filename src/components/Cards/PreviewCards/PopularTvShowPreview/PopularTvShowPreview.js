import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Skeleton from "@material-ui/lab/Skeleton";
import placeholder from "assets/images/placeholder.jpg";
import * as S from "./styles";

const PopularTvShowPreview = ({ preview }) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (preview) {
      setTimeout(() => {
        setImageUrl(
          preview.poster_path
            ? `${process.env.REACT_APP_API_IMAGES}${preview.poster_path}`
            : placeholder
        );
      }, [1000]);
    }
  }, [preview]);

  return (
    <S.Container>
      {imageUrl ? (
        <S.Image
          src={imageUrl}
          alt='popular tv show preview poster'
          loading='lazy'
        />
      ) : (
        <Skeleton className='skeleton-body' variant='rect' animation='wave' />
      )}
    </S.Container>
  );
};
PopularTvShowPreview.propTypes = {
  tvShow: PropTypes.object,
};

export default PopularTvShowPreview;
