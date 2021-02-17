import React from "react";
import * as S from "./styles";

const NextArrow = ({ className, onClick, CustomNextArrow }) => {
  return CustomNextArrow ? (
    <CustomNextArrow
      className={className}
      aria-label="next slide"
      aria-hidden="false"
      onClick={onClick}
    />
  ) : (
    <S.DefaultNextArrow
      className={className}
      aria-label="next slide"
      aria-hidden="false"
      onClick={onClick}
    />
  );
};

export default NextArrow;
