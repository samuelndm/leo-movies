import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Skeleton from "@material-ui/lab/Skeleton";
import placeholder from "assets/images/vertical-placeholder.png";
import { IMAGE_SIZES } from "utils/constants";
import * as S from "./styles";
import * as UI from "components/UIComponents";

const PreviewPerson = ({ preview }) => {
  const [baseUrl] = useState(`${process.env.REACT_APP_API_IMAGES}`);
  const [imageSize] = useState(`/${IMAGE_SIZES.PROFILE_SIZES.WIDTH_780}`);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    setTimeout(() => {
      if (preview) {
        const url = preview.profile_path
          ? `${baseUrl}${imageSize}${preview.profile_path}`
          : placeholder;

        setImageUrl(url);
      }
    }, [1000]);
  }, [preview, baseUrl, imageSize]);

  return (
    <S.Container>
      {imageUrl ? (
        <UI.LinkHandler url={`/person/${preview.id}`}>
          <S.Image src={imageUrl} alt="person preview poster" />
        </UI.LinkHandler>
      ) : (
        <Skeleton className="skeleton-body" variant="rect" animation="wave" />
      )}
    </S.Container>
  );
};

PreviewPerson.propTypes = {
  preview: PropTypes.object,
};

export default PreviewPerson;
