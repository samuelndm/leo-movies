import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { IMAGE_SIZES } from "utils/constants";
import { handleImageUrl } from "utils/cardsUtil";
import * as S from "../UIInfoCards/styles";
import * as C from "../UIInfoCards";

const MovieInfo = ({ content, style }) => {
  const [imageSize] = useState(IMAGE_SIZES.POSTER_SIZES.WIDTH_780);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (content) {
      const url = handleImageUrl(content.poster_path, imageSize);
      setImageUrl(url);
    }
  }, [content, imageSize]);

  return (
    <S.Container style={style}>
      <C.Image imageUrl={imageUrl} />

      <S.Details content={content}>
        <S.Content>
          <C.Title title={content?.title} />
          <C.VoteAverage voteAverage={content?.vote_average} />
        </S.Content>

        <S.Content>
          <C.ReleaseDate releaseDate={content?.release_date} />

          <S.Separator />
          <C.Genres genres={content?.genres} />

          <S.Separator />
          <C.Duration duration={content?.runtime} />
        </S.Content>

        <S.Content>
          <C.Tagline tagline={content?.tagline} />
        </S.Content>

        <S.Content>
          <C.Overview overview={content?.overview} />
        </S.Content>

        <S.Content>
          <C.WatchTrailerAction trailerKey={content?.videos?.[0]?.key} />
          <C.FavoriteAction content={content} />
          <C.WatchLaterAction content={content} />
        </S.Content>
      </S.Details>
    </S.Container>
  );
};

MovieInfo.propTypes = {
  content: PropTypes.object,
  style: PropTypes.object,
};

export default MovieInfo;
