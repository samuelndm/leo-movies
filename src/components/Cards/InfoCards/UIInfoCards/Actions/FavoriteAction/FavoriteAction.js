import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useFavoritesContext } from "contexts";
import { useCountdownTimer } from "hooks";
import * as S from "../styles";
import * as UI from "components/UIComponents";

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
    <S.CircleAction isDisabled={!content} onClick={handleClick}>
      <S.Icon
        color={isFavorited ? "#EC9929" : ""}
        className={`${isFavorited ? "fas" : "far"} fa-star`}
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

FavoriteAction.propTypes = {
  content: PropTypes.object,
};

export default FavoriteAction;
