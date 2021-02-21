import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";
import * as UI from "components/UIComponents";

const Tagline = ({ tagline = null }) => {
  return tagline !== null ? (
    <S.Container>{tagline || ""}</S.Container>
  ) : (
    <UI.Skeleton
      variant='text'
      animation='wave'
      SkeletonStyle={S.SkeletonStyle}
    />
  );
};

Tagline.propTypes = {
  tagline: PropTypes.string,
};

export default Tagline;
