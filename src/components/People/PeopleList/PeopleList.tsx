import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";
import * as C from "components";

const PeopleList = ({ people }) => {
  return (
    <S.Container>
      <S.FlexContainer>
        {people?.map((person, index) => (
          <S.FlexItem
            lg={2}
            xs={12}
            margin='15px'
            key={`personPreview-${person?.id || index}`}
          >
            <C.Card.PersonPreview preview={person} showPopularity />
          </S.FlexItem>
        ))}
      </S.FlexContainer>
    </S.Container>
  );
};

PeopleList.propTypes = {
  people: PropTypes.array,
};

export default PeopleList;
