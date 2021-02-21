import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";
import * as UI from "components/UIComponents";

const Title = ({ title = null }) => {
  return title !== null ? (
    <S.Container>{title || "*"}</S.Container>
  ) : (
    <UI.Skeleton variant='text' animation='wave' width='100%' />
  );
};

Title.propTypes = {
  title: PropTypes.string,
};

export default Title;
