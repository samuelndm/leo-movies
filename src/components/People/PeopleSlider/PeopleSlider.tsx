import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";
import * as C from "components";

const PeopleSlider = ({ people, slidesToShow, title }) => {
  return (
    <S.Container>
      {title && <S.Title>{title}</S.Title>}

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
