import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useWatchLaterContext } from "contexts";
import * as S from "../styles";

const WatchLaterAction = ({ content }) => {
  const {
    getWatchLater,
    addWatchLater,
    removeWatchLater,
  } = useWatchLaterContext();
  const [isWatchLater, setIsWatchLater] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();

    if (!isWatchLater) {
      addWatchLater(content);
      setIsWatchLater(true);
    } else {
      removeWatchLater(content);
      setIsWatchLater(false);
    }
  };

  useEffect(() => {
    const isWatchLater = getWatchLater(content?.id);
    setIsWatchLater(isWatchLater);
  }, [content, getWatchLater]);

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
  content: PropTypes.object,
};

export default WatchLaterAction;
