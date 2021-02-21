import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";
import * as Card from "components/Cards";

const PersonInfo = ({ person }) => {
  return (
    <S.Container>
      <S.Content>
        <Card.PersonInfo content={person} />
      </S.Content>
    </S.Container>
  );
};

PersonInfo.propTypes = {
  person: PropTypes.object,
};

export default PersonInfo;
