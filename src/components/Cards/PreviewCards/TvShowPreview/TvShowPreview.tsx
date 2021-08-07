import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import * as UTIL from "utils";
import * as S from "../UIPreviewCards/styles";
import * as C from "../UIPreviewCards";

const TvShowPreview = ({ preview, showVoteAverage }) => {
  const [imageSize] = useState(
    UTIL.Contants.IMAGE_SIZES.POSTER_SIZES.WIDTH_780
  );
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (preview) {
      const url = UTIL.Cards.handleImageUrl(preview.poster_path, imageSize);
      setImageUrl(url);
    }
  }, [preview, imageSize]);

  return (
    <S.Container>
      <C.Image imageUrl={imageUrl} redirectUrl={`/tv/${preview?.id}`} />

      {showVoteAverage && <C.VoteAverage voteAverage={preview?.vote_average} />}

      <C.Title title={preview?.name} />

      <C.ReleaseDate releaseDate={preview?.first_air_date} />
    </S.Container>
  );
};

TvShowPreview.propTypes = {
  preview: PropTypes.object,
  showVoteAverage: PropTypes.bool,
};

export default TvShowPreview;
