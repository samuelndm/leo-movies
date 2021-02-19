import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Skeleton from "@material-ui/lab/Skeleton";
import placeholder from "assets/images/vertical-placeholder.png";
import { IMAGE_SIZES } from "utils/constants";
import * as S from "./styles";
import * as UI from "components/UIComponents";

const TvShowPreview = ({ preview }) => {
  const [baseUrl] = useState(`${process.env.REACT_APP_API_IMAGES}`);
  const [imageSize] = useState(`/${IMAGE_SIZES.POSTER_SIZES.WIDTH_780}`);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    setTimeout(() => {
      if (preview) {
        const url = preview.poster_path
          ? `${baseUrl}${imageSize}${preview.poster_path}`
          : placeholder;

        setImageUrl(url);
      }
    }, [1000]);
  }, [preview, baseUrl, imageSize]);

  return (
    <S.Container>
      {imageUrl ? (
        <>
          <UI.LinkHandler url={`/tv/${preview.id}`}>
            <S.Image src={imageUrl} alt='tv show preview poster' />
          </UI.LinkHandler>

          <S.Popularity popularity={preview?.vote_average}>
            {preview?.vote_average || "NR"}
          </S.Popularity>

          <S.Title>{preview?.name || "*"}</S.Title>
          <S.ReleaseDate>{preview?.first_air_date || "*"}</S.ReleaseDate>
        </>
      ) : (
        <Skeleton className='skeleton-body' variant='rect' animation='wave' />
      )}
    </S.Container>
  );
};

TvShowPreview.propTypes = {
  preview: PropTypes.object,
};

export default TvShowPreview;
