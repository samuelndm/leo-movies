import React, { useState } from "react";
import PropTypes from "prop-types";
import * as S from "../styles";
import * as UI from "components/UIComponents";

const WatchTrailerAction = ({ trailerKey = null }) => {
  const [key, setKey] = useState("");

  const handleClick = (event) => {
    event.preventDefault();
    setKey(trailerKey || "");
  };

  return trailerKey !== null ? (
    <>
      <S.RectAction onClick={handleClick}>
        <>
          <S.Icon className='fab fa-youtube' />
          Watch Trailer
        </>
      </S.RectAction>

      {key && (
        <UI.Modal openModal={key} closeModal={setKey}>
          <UI.YoutubeMedia mediaKey={key} />
        </UI.Modal>
      )}
    </>
  ) : (
    <UI.Skeleton
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
