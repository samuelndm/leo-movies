import React from "react";
import PropTypes from "prop-types";
import * as UTIL from "utils/cardsUtil";
import * as S from "./styles";
import * as UI from "components/UIComponents";

const ReleaseDate = ({ releaseDate = null }) => {
  return releaseDate !== null ? (
    <S.Container>{UTIL.formatDateToSlash(releaseDate) || ""}</S.Container>
  ) : (
    <UI.Skeleton
      variant='text'
      animation='wave'
      SkeletonStyle={S.SkeletonStyle}
    />
  );
};

ReleaseDate.propTypes = {
  releaseDate: PropTypes.string,
};

export default ReleaseDate;
