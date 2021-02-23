import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import * as UTIl from "utils";
import * as S from "../UIPreviewCards/styles";
import * as C from "../UIPreviewCards";

const PersonPreview = ({ preview, showPopularity }) => {
  const [imageSize] = useState(
    `/${UTIl.Contants.IMAGE_SIZES.PROFILE_SIZES.WIDTH_780}`
  );
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (preview) {
      const url = UTIl.Cards.handleImageUrl(preview.profile_path, imageSize);
      setImageUrl(url);
    }
  }, [preview, imageSize]);

  return (
    <S.Container>
      <C.Image imageUrl={imageUrl} redirectUrl={`/person/${preview?.id}`} />

      {showPopularity && <C.Popularity popularity={preview?.popularity} />}

      <C.Title title={preview?.name} />

      <C.Departament departament={preview?.known_for_department} />
    </S.Container>
  );
};

PersonPreview.propTypes = {
  preview: PropTypes.object,
  showPopularity: PropTypes.bool,
};

export default PersonPreview;
