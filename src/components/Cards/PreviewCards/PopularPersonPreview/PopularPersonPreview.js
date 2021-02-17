import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Skeleton from "@material-ui/lab/Skeleton";
import placeholder from "assets/images/placeholder.jpg";
import { IMAGE_SIZES } from "utils/constants";
import * as S from "./styles";
import * as UI from "components/UIComponents";

const PopularPersonPreview = ({ preview }) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    setTimeout(() => {
      if (preview) {
        setImageUrl(
          preview.profile_path
            ? `${process.env.REACT_APP_API_IMAGES}/${IMAGE_SIZES.POSTER_SIZES.WIDTH_780}${preview.profile_path}`
            : placeholder
        );
      }
    }, [1000]);
  }, [preview]);

  return (
    <S.Container>
      {imageUrl ? (
        <UI.LinkHandler url={`/person/${preview.id}`}>
          <S.Image
            src={imageUrl}
            alt="popular person preview poster"
            loading="lazy"
          />
        </UI.LinkHandler>
      ) : (
        <Skeleton className="skeleton-body" variant="rect" animation="wave" />
      )}
    </S.Container>
  );
};

PopularPersonPreview.propTypes = {
  person: PropTypes.object,
};

export default PopularPersonPreview;
