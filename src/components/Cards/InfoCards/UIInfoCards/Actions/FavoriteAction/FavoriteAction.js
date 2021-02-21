import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useFavoritesContext } from "contexts";
import * as S from "../styles";

const FavoriteAction = ({ content }) => {
  const { getFavorite, addFavorite, removeFavorite } = useFavoritesContext();
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
  content: PropTypes.object,
};

export default FavoriteAction;
