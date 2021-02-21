import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";
import * as UI from "components/UIComponents";

const Departament = ({ departament = null }) => {
  return departament !== null ? (
    <S.Container>{departament || "*"}</S.Container>
  ) : (
    <UI.Skeleton variant='text' animation='wave' width='100%' />
  );
};

Departament.propTypes = {
  departament: PropTypes.string,
};

export default Departament;
