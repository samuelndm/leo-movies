import React from "react";
import PropTypes from "prop-types";
import { useCountdownTimer } from "hooks";
import * as S from "./styles";
import * as UI from "components/UIComponents";

const Departament = ({ departament }) => {
  const { countdown } = useCountdownTimer();

  return departament || countdown === 0 ? (
    <S.Container>{departament || "*"}</S.Container>
  ) : (
    <UI.Skeleton variant='text' animation='wave' width='100%' />
  );
};

Departament.propTypes = {
  departament: PropTypes.string,
};

export default Departament;
