import React from "react";
import PropTypes from "prop-types";
import { default as StickSlider } from "react-slick";
import { removeElementsAttrByQuery } from "utils/utils";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as S from "./styles";
import PrevArrow from "./PrevArrow/PrevArrow";
import NextArrow from "./NextArrow/NextArrow";

const Slider = ({
  children,
  settings,
  slidesToShow,
  responsive,
  CustomPrevArrow,
  CustomNextArrow,
}) => {
  let defaultSettings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow || 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow CustomPrevArrow={CustomPrevArrow} />,
    nextArrow: <NextArrow CustomNextArrow={CustomNextArrow} />,
    appendDots: (dots) => <S.Dots>{dots}</S.Dots>,
    responsive: responsive || [],
    ...settings,
  };

  removeElementsAttrByQuery(".slick-slide", "aria-hidden");

  return (
    <StickSlider {...defaultSettings} style={S.SliderStyle}>
      {children}
    </StickSlider>
  );
};

Slider.propTypes = {
  children: PropTypes.array.isRequired,
  settings: PropTypes.object,
  slidesToShow: PropTypes.number,
  responsive: PropTypes.array,
  CustomPrevArrow: PropTypes.object,
  CustomNextArrow: PropTypes.object,
};

export default Slider;
