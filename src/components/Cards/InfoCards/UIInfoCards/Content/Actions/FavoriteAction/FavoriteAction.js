import React, { useState } from "react";
import PropTypes from "prop-types";
import * as S from "../styles";

const FavoriteAction = ({ contentId }) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    setIsFavorited((prev) => !prev);
  };

  return (
    <S.CircleAction onClick={handleClick}>
      <S.Icon
        color={isFavorited ? "#EC9929" : ""}
        className={`${isFavorited ? "fas" : "far"} fa-star`}
      />
    </S.CircleAction>
  );
};

FavoriteAction.propTypes = {
  contentId: PropTypes.number,
};

export default FavoriteAction;
