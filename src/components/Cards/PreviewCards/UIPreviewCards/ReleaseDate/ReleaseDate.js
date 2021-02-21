import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";
import * as UI from "components/UIComponents";

const ReleaseDate = ({ releaseDate = null }) => {
  return releaseDate !== null ? (
    <S.Container>{releaseDate || "*"}</S.Container>
  ) : (
    <UI.Skeleton variant='text' animation='wave' width='100%' />
  );
};

ReleaseDate.propTypes = {
  releaseDate: PropTypes.string,
};

export default ReleaseDate;
