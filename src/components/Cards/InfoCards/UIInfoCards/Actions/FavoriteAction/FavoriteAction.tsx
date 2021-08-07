import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useFavoritesContext } from "contexts";
import { useCountdownTimer } from "hooks";
import * as S from "../styles";
import * as C from "components";

const FavoriteAction = ({ content }) => {
  const { getFavorite, addFavorite, removeFavorite } = useFavoritesContext();
  const { countdown } = useCountdownTimer();
  const [isFavorited, setIsFavorited] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();

    if (!isFavorited) {
      addFavorite(content);
      setIsFavorited(true);
    } else {
      removeFavorite(content);
      setIsFavorited(false);
    }
  };

  useEffect(() => {
    const isFavorited = getFavorite(content?.id);
    setIsFavorited(isFavorited);
  }, [content, getFavorite]);

  return content || countdown === 0 ? (
    <C.UI.Tooltip title="Add to favorites" hasArrow>
      <S.CircleAction isDisabled={!content} onClick={handleClick}>
        <S.Icon
          color={isFavorited ? "#EC9929" : ""}
          className={`${isFavorited ? "fas" : "far"} fa-star`}
        />
      </S.CircleAction>
    </C.UI.Tooltip>
  ) : (
    <C.UI.Skeleton
      variant="circle"
      animation="wave"
      SkeletonStyle={S.SkeletonCircleStyle}
    />
  );
};

FavoriteAction.propTypes = {
  content: PropTypes.object,
};

export default FavoriteAction;
