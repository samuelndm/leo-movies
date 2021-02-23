import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import * as Settings from "./PreviewsSliderSettings";
import * as UTIL from "utils";
import * as S from "./styles";
import * as C from "components";

const PreviewsSlider = ({
  previews,
  PreviewCard,
  slidesToShow = Settings.SLIDES_TO_SHOW_DEFAULT,
  showVoteAverage,
  showPopularity,
  style,
}) => {
  const [content, setContent] = useState(UTIL.createEmptyArray(slidesToShow));

  useEffect(() => {
    if (previews && previews.length) {
      setContent(previews);
    }
  }, [previews]);

  return (
    <S.Container style={style}>
      <C.UI.Slider
        settings={{
          ...Settings.sliderSettings,
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
      </C.UI.Slider>
    </S.Container>
  );
};

PreviewsSlider.propTypes = {
  previews: PropTypes.array,
  PreviewCard: PropTypes.func,
  showVoteAverage: PropTypes.bool,
  showPopularity: PropTypes.bool,
  slidesToShow: PropTypes.number,
  style: PropTypes.object,
};

export default PreviewsSlider;
