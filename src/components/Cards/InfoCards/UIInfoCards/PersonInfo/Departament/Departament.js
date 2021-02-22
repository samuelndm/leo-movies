import React from "react";
import PropTypes from "prop-types";
import { useCountdownTimer } from "hooks";
import * as S from "./styles";
import * as UI from "components/UIComponents";

const Departament = ({ departament }) => {
  const { countdown } = useCountdownTimer();

  return departament || countdown === 0 ? (
    <S.Container>
      <S.Title>Known For</S.Title>
      <S.Content>{departament || "*"}</S.Content>
    </S.Container>
  ) : (
    <UI.Skeleton
      variant='text'
      animation='wave'
      SkeletonStyle={S.SkeletonStyle}
    />
  );
};

Departament.propTypes = {
  departament: PropTypes.string,
};

export default Departament;
