import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useFavoritesContext } from "contexts/FavoritesProvider/FavoritesProvider";
import * as S from "../styles";

const FavoriteAction = ({ contentId }) => {
  const { getFavorite, addFavorite, removeFavorite } = useFavoritesContext();
  const [isFavorited, setIsFavorited] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();

    if (!isFavorited) {
      addFavorite(contentId);
      setIsFavorited(true);
    } else {
      removeFavorite(contentId);
      setIsFavorited(false);
    }
  };

  useEffect(() => {
    const isFavorited = getFavorite(contentId);
    setIsFavorited(isFavorited);
  }, [contentId, getFavorite]);

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
