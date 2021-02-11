import React from "react";
import PropTypes from "prop-types";
import { default as StickSlider } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as S from "./styles";

const PrevArrow = (props) => {
  const { className, onClick, CustomPrevArrow } = props;
  return CustomPrevArrow ? (
    <CustomPrevArrow className={className} onClick={onClick} />
  ) : (
    <S.DefaultPrevArrow className={className} onClick={onClick} />
  );
};

const NextArrow = (props) => {
  const { className, onClick, CustomNextArrow } = props;
  return CustomNextArrow ? (
    <CustomNextArrow className={className} onClick={onClick} />
  ) : (
    <S.DefaultNextArrow className={className} onClick={onClick} />
  );
};

const Slider = ({
  children,
  settings,
  slidesToShow,
  hasDots,
  responsive,
  CustomPrevArrow,
  CustomNextArrow,
}) => {
  let defaultSettings = {
    arrows: true,
    dots: hasDots,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow || 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow CustomPrevArrow={CustomPrevArrow} />,
    nextArrow: <NextArrow CustomNextArrow={CustomNextArrow} />,
    responsive: responsive || [],
    appendDots: (dots) => <S.Dots>{dots}</S.Dots>,
    ...settings,
  };

  return (
    <StickSlider {...defaultSettings} style={S.SliderStyle}>
      {children}
    </StickSlider>
  );
};

Slider.propTypes = {
  children: PropTypes.element.isRequired,
  settings: PropTypes.object,
  slidesToShow: PropTypes.number,
  hasDots: PropTypes.bool,
  responsive: PropTypes.array,
  CustomPrevArrow: PropTypes.object,
  CustomNextArrow: PropTypes.object,
};

export default Slider;
