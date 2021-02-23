import React from "react";
import PropTypes from "prop-types";
import { useCountdownTimer } from "hooks";
import * as UTIL from "utils";
import * as S from "./styles";
import * as C from "components";

const Birthday = ({ birthday }) => {
  const { countdown } = useCountdownTimer();

  return birthday || countdown === 0 ? (
    <S.Container>
      <S.Title>Birthday</S.Title>
      <S.Content>{UTIL.Cards.formatDateToSlash(birthday) || "*"}</S.Content>
    </S.Container>
  ) : (
    <C.UI.Skeleton
      variant='text'
      animation='wave'
      SkeletonStyle={S.SkeletonStyle}
    />
  );
};

Birthday.propTypes = {
  birthday: PropTypes.string,
};

export default Birthday;
