import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { SLIDES_TO_SHOW, sliderSettings } from "./PreviewSliderSettings";
import * as UTIL from "utils/utils";
import * as S from "./styles";
import * as UI from "components/UIComponents";

const PreviewSlider = ({ previews, PreviewCard }) => {
  const [content, setContent] = useState(UTIL.createEmptyArray(SLIDES_TO_SHOW));

  useEffect(() => {
    if (previews && previews.length) {
      setContent(previews);
    }
  }, [previews]);

  return (
    <S.Container>
      <UI.Slider settings={sliderSettings}>
        {content.map((preview, index) => (
          <PreviewCard
            preview={preview}
            aria-modal='true'
            key={`preview-${preview?.id || index}`}
          />
        ))}
      </UI.Slider>
    </S.Container>
  );
};

PreviewSlider.propTypes = {
  previews: PropTypes.array,
  PreviewCard: PropTypes.func,
};

export default PreviewSlider;
