import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  SLIDES_TO_SHOW_DEFAULT,
  sliderSettings,
} from "./PreviewsSliderSettings";
import * as UTIL from "utils/utils";
import * as S from "./styles";
import * as UI from "components/UIComponents";

const PreviewsSlider = ({
  previews,
  PreviewCard,
  slidesToShow = SLIDES_TO_SHOW_DEFAULT,
  showVoteAverage,
  showPopularity,
}) => {
  const [content, setContent] = useState(UTIL.createEmptyArray(slidesToShow));

  useEffect(() => {
    if (previews && previews.length) {
      setContent(previews);
    }
  }, [previews]);

  return (
    <S.Container>
      <UI.Slider
        settings={{
          ...sliderSettings,
          slidesToShow,
          slidesToScroll: slidesToShow,
        }}
      >
        {content.map((preview, index) => (
          <PreviewCard
            preview={preview}
            showVoteAverage={showVoteAverage}
            showPopularity={showPopularity}
            key={`preview-${preview?.id || index}`}
          />
        ))}
      </UI.Slider>
    </S.Container>
  );
};

PreviewsSlider.propTypes = {
  previews: PropTypes.array,
  PreviewCard: PropTypes.func,
  showVoteAverage: PropTypes.bool,
  showPopularity: PropTypes.bool,
  slidesToShow: PropTypes.number,
};

export default PreviewsSlider;
