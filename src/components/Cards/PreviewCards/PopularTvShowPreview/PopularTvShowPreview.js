import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { IMAGE_SIZES } from "utils/constants";
import { handleImageUrl } from "utils/cardsUtil";
import * as UIPreview from "../UIPreviewCards";

const PopularTvShowPreview = ({ preview }) => {
  const [imageSize] = useState(IMAGE_SIZES.POSTER_SIZES.WIDTH_780);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (preview) {
      const url = handleImageUrl(preview.poster_path, imageSize);
      setImageUrl(url);
    }
  }, [preview, imageSize]);

  return (
    <UIPreview.CardContainer>
      <UIPreview.Image imageUrl={imageUrl} redirectUrl={`/tv/${preview?.id}`} />

      <UIPreview.VoteAverage voteAverage={preview?.vote_average || 0} />

      <UIPreview.Title title={preview?.name || ""} />

      <UIPreview.ReleaseDate releaseDate={preview?.first_air_date || ""} />
    </UIPreview.CardContainer>
  );
};

PopularTvShowPreview.propTypes = {
  preview: PropTypes.object,
};

export default PopularTvShowPreview;
