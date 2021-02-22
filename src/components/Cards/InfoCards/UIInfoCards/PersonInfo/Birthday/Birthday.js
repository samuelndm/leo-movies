import React from "react";
import PropTypes from "prop-types";
import { useCountdownTimer } from "hooks";
import * as UTIL from "utils/cardsUtil";
import * as S from "./styles";
import * as UI from "components/UIComponents";

const Birthday = ({ birthday }) => {
  const { countdown } = useCountdownTimer();

  return birthday || countdown === 0 ? (
    <S.Container>
      <S.Title>Birthday</S.Title>
      <S.Content>{UTIL.formatDateToSlash(birthday) || "*"}</S.Content>
    </S.Container>
  ) : (
    <UI.Skeleton
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
