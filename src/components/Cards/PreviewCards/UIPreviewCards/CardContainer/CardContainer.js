import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";

const CardContainer = ({ children, style }) => {
  return <S.Container style={style}>{children}</S.Container>;
};

CardContainer.propTypes = {
  children: PropTypes.func,
  style: PropTypes.object,
};

export default CardContainer;
