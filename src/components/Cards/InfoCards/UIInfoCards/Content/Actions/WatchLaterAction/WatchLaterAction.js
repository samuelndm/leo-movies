import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import * as S from "../styles";
import { useWatchLaterContext } from "contexts";

const WatchLaterAction = ({ contentId }) => {
  const {
    getWatchLater,
    addWatchLater,
    removeWatchLater,
  } = useWatchLaterContext();
  const [isWatchLater, setIsWatchLater] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();

    if (!isWatchLater) {
      addWatchLater(contentId);
      setIsWatchLater(true);
    } else {
      removeWatchLater(contentId);
      setIsWatchLater(false);
    }
  };

  useEffect(() => {
    const isWatchLater = getWatchLater(contentId);
    setIsWatchLater(isWatchLater);
  }, [contentId, getWatchLater]);

  return (
    <S.CircleAction onClick={handleClick}>
      <S.Icon
        color={isWatchLater ? "#EC9929" : ""}
        className={`${isWatchLater ? "fas" : "far"} fa-bookmark`}
      />
    </S.CircleAction>
  );
};

WatchLaterAction.propTypes = {
  contentId: PropTypes.number,
};

export default WatchLaterAction;
