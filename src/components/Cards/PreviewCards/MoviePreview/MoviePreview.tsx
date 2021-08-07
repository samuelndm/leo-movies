import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import * as UTIL from "utils";
import * as S from "../UIPreviewCards/styles";
import * as C from "../UIPreviewCards";

const MoviePreview = ({ preview, showVoteAverage }) => {
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
      <C.Image imageUrl={imageUrl} redirectUrl={`/movie/${preview?.id}`} />

      {showVoteAverage && <C.VoteAverage voteAverage={preview?.vote_average} />}

      <C.Title title={preview?.title} />

      <C.ReleaseDate releaseDate={preview?.release_date} />
    </S.Container>
  );
};

MoviePreview.propTypes = {
  preview: PropTypes.object,
  showVoteAverage: PropTypes.bool,
};

export default MoviePreview;
