import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";

const YoutubeMedia = ({ mediaKey }) => {
  if (!mediaKey) return null;
  return (
    <S.Iframe
      src={`http://www.youtube.com/embed/${mediaKey}?autoplay=1&autohide=1`}
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
