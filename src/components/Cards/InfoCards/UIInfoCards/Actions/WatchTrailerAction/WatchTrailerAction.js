import React, { useState } from "react";
import PropTypes from "prop-types";
import { useCountdownTimer } from "hooks";
import * as S from "../styles";
import * as C from "components";

const WatchTrailerAction = ({ trailerKey }) => {
  const { countdown } = useCountdownTimer();
  const [key, setKey] = useState("");

  const handleClick = (event) => {
    event.preventDefault();
    setKey(trailerKey || "");
  };

  return trailerKey || countdown === 0 ? (
    <>
      <S.RectAction isDisabled={!trailerKey} onClick={handleClick}>
        <S.Icon className='fab fa-youtube' />
        {trailerKey ? "Watch Trailer" : "Trailer Unavailable"}
      </S.RectAction>

      {key && (
        <C.UI.Modal openModal={key} closeModal={setKey}>
          <C.UI.YoutubeMedia mediaKey={key} />
        </C.UI.Modal>
      )}
    </>
  ) : (
    <C.UI.Skeleton
      variant='rect'
      animation='wave'
      SkeletonStyle={S.SkeletonRectleStyle}
    />
  );
};

WatchTrailerAction.propTypes = {
  trailerKey: PropTypes.string,
};

export default WatchTrailerAction;
