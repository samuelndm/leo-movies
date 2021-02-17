import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Skeleton from "@material-ui/lab/Skeleton";
import placeholder from "assets/images/placeholder.jpg";
import * as S from "./styles";

const PopularPersonPreview = ({ preview }) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (preview) {
      setTimeout(() => {
        setImageUrl(
          preview.profile_path
            ? `${process.env.REACT_APP_API_IMAGES}${preview.profile_path}`
            : placeholder
        );
      }, [1000]);
    }
  }, [preview]);

  return (
    <S.Container>
      {imageUrl ? (
        <S.Image src={imageUrl} alt='popular person preview poster' />
      ) : (
        <Skeleton className='skeleton-body' variant='rect' animation='wave' />
      )}
    </S.Container>
  );
};

PopularPersonPreview.propTypes = {
  person: PropTypes.object,
};

export default PopularPersonPreview;
