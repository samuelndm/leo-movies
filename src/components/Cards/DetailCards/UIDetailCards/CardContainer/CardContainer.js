import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";

const CardContainer = ({ children, style }) => {
  return <S.Container style={style}>{children}</S.Container>;
};

CardContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.array]),
  style: PropTypes.object,
};

export default CardContainer;
