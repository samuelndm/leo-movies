import React, { useState } from "react";
import PropTypes from "prop-types";
import * as S from "../styles";
import * as UI from "components/UIComponents";

const WatchTrailerAction = ({ trailerKey }) => {
  const [key, setKey] = useState("");

  const handleClick = (event) => {
    event.preventDefault();
    setKey(trailerKey || "");
  };

  return (
    <>
      <S.RectAction onClick={handleClick}>
        <S.Icon className='fab fa-youtube' />
        Watch Trailer
      </S.RectAction>

      {key && (
        <UI.Modal openModal={key} closeModal={setKey}>
          <UI.YoutubeMedia mediaKey={key} />
        </UI.Modal>
      )}
    </>
  );
};

WatchTrailerAction.propTypes = {
  trailerKey: PropTypes.string,
};

export default WatchTrailerAction;
