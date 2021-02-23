import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";
import * as GS from "assets/styles/GlobalStyles";
import * as C from "components";

const PeopleSlider = ({ people, slidesToShow, title }) => {
  return (
    <S.Container>
      {title && <GS.ContainerTitle>{title}</GS.ContainerTitle>}

      <C.PreviewsSlider
        previews={people}
        PreviewCard={C.Card.PersonPreview}
        slidesToShow={slidesToShow}
      />
    </S.Container>
  );
};

PeopleSlider.propTypes = {
  people: PropTypes.array,
  slidesToShow: PropTypes.number,
  title: PropTypes.string,
};

export default PeopleSlider;
