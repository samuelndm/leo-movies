import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";
import * as GS from "assets/styles/GlobalStyles";
import * as Card from "components/Cards";

const PersonsList = ({ persons }) => {
  return (
    <S.Container>
      <GS.FlexContainer>
        {persons.map((person) => (
          <GS.FlexItem lg={2} xs={12} key={`personPreview-${person.id}`}>
            <Card.PersonPreview preview={person} />
          </GS.FlexItem>
        ))}
      </GS.FlexContainer>
    </S.Container>
  );
};

PersonsList.propTypes = {
  persons: PropTypes.array,
};

export default PersonsList;
