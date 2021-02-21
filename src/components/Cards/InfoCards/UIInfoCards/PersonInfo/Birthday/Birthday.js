import React from "react";
import PropTypes from "prop-types";
import * as UTIL from "utils/cardsUtil";
import * as S from "./styles";

const Birthday = ({ birthday = null }) => {
  return (
    <S.Container>
      <S.Title>Birthday</S.Title>
      <S.Content>{UTIL.formatDateToSlash(birthday) || "*"}</S.Content>
    </S.Container>
  );
};

Birthday.propTypes = {
  birthday: PropTypes.string,
};

export default Birthday;
