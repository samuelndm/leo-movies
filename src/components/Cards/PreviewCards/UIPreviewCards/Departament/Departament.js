import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";

const Departament = ({ departament }) => {
  return <S.Container>{departament || "*"}</S.Container>;
};

Departament.propTypes = {
  departament: PropTypes.string,
};

export default Departament;
