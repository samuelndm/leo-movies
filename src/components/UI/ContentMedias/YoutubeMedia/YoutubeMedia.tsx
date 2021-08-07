import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";

const YoutubeMedia = ({ mediaKey, hasAutoplay }) => {
  if (!mediaKey) return null;
  return (
    <S.Iframe
      src={`https://www.youtube.com/embed/${mediaKey}?autoplay=${
        hasAutoplay ? 1 : 0
      }`}
      type='text/html'
      title='trailer'
      allowFullScreen
      webkitallowfullscreen
      mozallowfullscreen
      allowscriptaccess='always'
      frameborder='0'
    />
  );
};

YoutubeMedia.propTypes = {
  mediaKey: PropTypes.string,
};

export default YoutubeMedia;
