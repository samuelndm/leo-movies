import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";

const Title = ({ title }) => {
  return <S.Container>{title || "*"}</S.Container>;
};

Title.propTypes = {
  title: PropTypes.string,
};

export default Title;
