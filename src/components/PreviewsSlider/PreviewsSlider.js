import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import * as UTIL from "../../utils/utils";
import * as S from "./styles";
import * as UI from "../UIComponents";
import Preview from "./Preview/Preview";

const sliderResponsiveSettings = [
  {
    breakpoint: 1200,
    settings: {
      slidesToShow: 5,
    },
  },
  {
    breakpoint: 1000,
    settings: {
      slidesToShow: 4,
    },
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 3,
    },
  },
];

const PreviewsSlider = ({ previews }) => {
  const [content, setContent] = useState(UTIL.createEmptyArray(6));

  useEffect(() => {
    if (previews && previews.length) {
      setContent(previews);
    }
  }, [previews]);

  return (
    <S.Container>
      <UI.Slider
        slidesToShow={6}
        hasDots={true}
        responsive={sliderResponsiveSettings}
      >
        {content.map((preview, index) => (
          <Preview preview={preview} key={`preview-${preview?.id || index}`} />
        ))}
      </UI.Slider>
    </S.Container>
  );
};

PreviewsSlider.propTypes = {
  movies: PropTypes.array,
};

export default PreviewsSlider;
