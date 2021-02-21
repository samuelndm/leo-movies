import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";
import * as GS from "assets/styles/GlobalStyles";
import * as Card from "components/Cards";

const PeopleList = ({ people }) => {
  return (
    <S.Container>
      <GS.FlexContainer>
        {people?.map((person, index) => (
          <GS.FlexItem
            lg={2}
            xs={12}
            margin='15px'
            key={`personPreview-${person?.id || index}`}
          >
            <Card.PersonPreview preview={person} showPopularity />
          </GS.FlexItem>
        ))}
      </GS.FlexContainer>
    </S.Container>
  );
};

PeopleList.propTypes = {
  people: PropTypes.array,
};

export default PeopleList;
