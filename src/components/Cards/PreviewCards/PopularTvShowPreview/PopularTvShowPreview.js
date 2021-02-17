import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Skeleton from "@material-ui/lab/Skeleton";
import placeholder from "assets/images/placeholder.jpg";
import { IMAGE_SIZES } from "utils/constants";
import * as S from "./styles";
import * as UI from "components/UIComponents";

const PopularTvShowPreview = ({ preview }) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    setTimeout(() => {
      if (preview) {
        setImageUrl(
          preview.poster_path
            ? `${process.env.REACT_APP_API_IMAGES}/${IMAGE_SIZES.WIDTH_500}${preview.poster_path}`
            : placeholder
        );
      }
    }, [1000]);
  }, [preview]);

  return (
    <S.Container>
      {imageUrl ? (
        <UI.LinkHandler url={`/tv/${preview.id}`}>
          <S.Image
            src={imageUrl}
            alt="popular tv show preview poster"
            loading="lazy"
          />
        </UI.LinkHandler>
      ) : (
        <Skeleton className="skeleton-body" variant="rect" animation="wave" />
      )}
    </S.Container>
  );
};
PopularTvShowPreview.propTypes = {
  tvShow: PropTypes.object,
};

export default PopularTvShowPreview;
