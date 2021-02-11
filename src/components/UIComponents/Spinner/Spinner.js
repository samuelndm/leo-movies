import React from "react";
import PropTypes from "prop-types";
import { ClipLoader } from "react-spinners";
import * as S from "./styles";

const Spinner = ({ size, color }) => {
  const DEFAULT_SIZE = 50;
  const DEFAULT_COLOR = "#2F276C";

  return (
    <S.Container>
      <ClipLoader size={size || DEFAULT_SIZE} color={color || DEFAULT_COLOR} />
    </S.Container>
  );
};

Spinner.propTypes = {
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  color: PropTypes.string,
};

export default Spinner;
