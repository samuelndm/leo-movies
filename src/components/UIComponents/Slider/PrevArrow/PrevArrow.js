import React from "react";
import * as S from "./styles";

const PrevArrow = ({ className, onClick, CustomPrevArrow }) => {
  return CustomPrevArrow ? (
    <CustomPrevArrow
      className={className}
      aria-label="previous slide"
      onClick={onClick}
    />
  ) : (
    <S.DefaultPrevArrow
      className={className}
      aria-label="previous slide"
      onClick={onClick}
    />
  );
};

export default PrevArrow;
