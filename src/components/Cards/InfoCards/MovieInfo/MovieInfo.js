import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { IMAGE_SIZES } from "utils/constants";
import { handleImageUrl } from "utils/cardsUtil";
import * as UIInfo from "../UIInfoCards";

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
    <UIInfo.CardContainer style={style}>
      <UIInfo.Image imageUrl={imageUrl} />
      <UIInfo.Content content={content} />
    </UIInfo.CardContainer>
  );
};

MovieInfo.propTypes = {
  content: PropTypes.object,
  style: PropTypes.object,
};

export default MovieInfo;
