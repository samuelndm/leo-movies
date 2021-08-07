import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import * as UTIL from "utils";
import * as S from "../UIInfoCards/styles";
import * as C from "../UIInfoCards";

const MovieInfo = ({ content, style }) => {
  const [imageSize] = useState(
    UTIL.Contants.IMAGE_SIZES.PROFILE_SIZES.WIDTH_780
  );
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (content) {
      const url = UTIL.Cards.handleImageUrl(content.profile_path, imageSize);
      setImageUrl(url);
    }
  }, [content, imageSize]);

  return (
    <S.Container style={style}>
      <C.Image imageUrl={imageUrl} />

      <S.Details content={content}>
        <S.Content>
          <C.Title title={content?.name} />
        </S.Content>

        <S.Content>
          <C.Departament departament={content?.known_for_department} />
        </S.Content>

        <S.Content>
          <C.Gender gender={content?.gender} />
        </S.Content>

        <S.Content>
          <C.Birthday birthday={content?.birthday} />
        </S.Content>

        <S.Content>
          <C.PlaceOfBirth placeOfBirth={content?.place_of_birth} />
        </S.Content>

        <S.Content>
          <C.Biography biography={content?.biography} />
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
