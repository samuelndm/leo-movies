import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { IMAGE_SIZES } from "utils/constants";
import { handleImageUrl } from "utils/cardsUtil";
import * as S from "./styles";
import * as UIPreview from "../UIPreviewCards";

const PopularMoviePreview = ({ preview }) => {
  const [imageSize] = useState(IMAGE_SIZES.POSTER_SIZES.WIDTH_780);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (preview) {
      const url = handleImageUrl(preview.poster_path, imageSize);
      setImageUrl(url);
    }
  }, [preview, imageSize]);

  return (
    <S.Container>
      <UIPreview.Image
        imageUrl={imageUrl}
        redirectUrl={`/movie/${preview?.id}`}
      />

      <UIPreview.VoteAverage voteAverage={preview?.vote_average || 0} />

      <UIPreview.Title title={preview?.title || ""} />

      <UIPreview.ReleaseDate releaseDate={preview?.release_date || ""} />
    </S.Container>
  );
};

PopularMoviePreview.propTypes = {
  preview: PropTypes.object,
};

export default PopularMoviePreview;
