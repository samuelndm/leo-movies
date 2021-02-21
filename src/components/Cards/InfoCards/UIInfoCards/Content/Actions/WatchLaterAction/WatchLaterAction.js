import React, { useState } from "react";
import PropTypes from "prop-types";
import * as S from "../styles";

const WatchLaterAction = ({ contentId }) => {
  const [isMarked, setIsMarked] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    setIsMarked((prev) => !prev);
  };

  return (
    <S.CircleAction onClick={handleClick}>
      <S.Icon
        color={isMarked ? "#EC9929" : ""}
        className={`${isMarked ? "fas" : "far"} fa-bookmark`}
      />
    </S.CircleAction>
  );
};

WatchLaterAction.propTypes = {
  contentId: PropTypes.number,
};

export default WatchLaterAction;
