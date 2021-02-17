import React from "react";
import PropTypes from "prop-types";
import { resizeArray } from "utils/utils";
import * as S from "./styles";
import * as GS from "assets/styles/GlobalStyles";
import * as C from "components";
import * as Card from "components/Cards";

const MAX_AMOUNT = 9;

const PopularPersons = ({ persons }) => {
  return (
    <S.Container>
      <GS.ContainerTitle>Most Popular Persons</GS.ContainerTitle>

      <C.PreviewSlider
        previews={resizeArray(persons, MAX_AMOUNT)}
        PreviewCard={Card.PopularPersonPreview}
      />
    </S.Container>
  );
};

PopularPersons.propTypes = {
  persons: PropTypes.array,
};

export default PopularPersons;
