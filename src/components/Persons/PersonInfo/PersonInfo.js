import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";
import * as GS from "assets/styles/GlobalStyles";

const PersonInfo = ({ person }) => {
  return (
    <S.Container>
      <GS.ContainerTitle>{person?.name || "*"}</GS.ContainerTitle>
    </S.Container>
  );
};

PersonInfo.propTypes = {
  person: PropTypes.object,
};

export default PersonInfo;
