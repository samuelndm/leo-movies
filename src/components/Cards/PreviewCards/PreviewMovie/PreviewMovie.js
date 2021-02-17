import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Skeleton from "@material-ui/lab/Skeleton";
import placeholder from "assets/images/vertical-placeholder.png";
import { IMAGE_SIZES } from "utils/constants";
import * as S from "./styles";
import * as UI from "components/UIComponents";

const PreviewMovie = ({ preview }) => {
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

  console.log("preview", preview);

  return (
    <S.Container>
      {imageUrl ? (
        <UI.LinkHandler url={`/movie/${preview.id}`}>
          <S.Image src={imageUrl} alt="movie preview poster" />
        </UI.LinkHandler>
      ) : (
        <Skeleton className="skeleton-body" variant="rect" animation="wave" />
      )}
    </S.Container>
  );
};

PreviewMovie.propTypes = {
  preview: PropTypes.object,
};

export default PreviewMovie;
