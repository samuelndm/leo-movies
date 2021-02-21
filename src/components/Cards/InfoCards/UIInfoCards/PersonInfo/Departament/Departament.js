import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";

const Departament = ({ departament = null }) => {
  return (
    <S.Container>
      <S.Title>Known For</S.Title>
      <S.Content>{departament || "*"}</S.Content>
    </S.Container>
  );
};

Departament.propTypes = {
  departament: PropTypes.string,
};

export default Departament;
