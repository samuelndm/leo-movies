import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useWatchLaterContext } from "contexts";
import { useCountdownTimer } from "hooks";
import * as S from "../styles";
import * as UI from "components/UIComponents";

const WatchLaterAction = ({ content }) => {
  const {
    getWatchLater,
    addWatchLater,
    removeWatchLater,
  } = useWatchLaterContext();
  const { countdown } = useCountdownTimer();
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

  return content || countdown === 0 ? (
    <S.CircleAction isDisabled={!content} onClick={handleClick}>
      <S.Icon
        color={isWatchLater ? "#EC9929" : ""}
        className={`${isWatchLater ? "fas" : "far"} fa-bookmark`}
      />
    </S.CircleAction>
  ) : (
    <UI.Skeleton
      variant='circle'
      animation='wave'
      SkeletonStyle={S.SkeletonCircleStyle}
    />
  );
};

WatchLaterAction.propTypes = {
  content: PropTypes.object,
};

export default WatchLaterAction;
