import React, { createContext, useContext, useEffect, useState } from "react";
import * as UTIL from "utils";

const FavoritesContext = createContext();

export const useFavoritesContext = () => useContext(FavoritesContext);

const FavoritesProvider = ({ children }) => {
  const [favoritesStorage, setFavorites] = useState([]);

  const getFavorite = (favoriteId) => {
    return favoritesStorage.find(
      (favoriteStorage) => favoriteStorage?.id === favoriteId
    );
  };

  const addFavorite = (favorite) => {
    const hasFavorite = getFavorite(favorite?.id);

    if (!hasFavorite) {
      const newFavorite = {
        id: favorite?.id,
        media_type: UTIL.Media.getMediaType(favorite),
      };

      const newFavorites = [...favoritesStorage, newFavorite];
      setFavorites(newFavorites);
      UTIL.Storage.updateFavoritesStorage(newFavorites);
      UTIL.Notifications.createSuccessNotification({
        message: "Added to favorites.",
      });
    }
  };

  const removeFavorite = (favorite) => {
    const hasFavorite = getFavorite(favorite?.id);

    if (hasFavorite) {
      const newFavorites = favoritesStorage?.filter(
        (favoriteStorage) => favoriteStorage?.id !== favorite?.id
      );
      setFavorites(newFavorites);
      UTIL.Storage.updateFavoritesStorage(newFavorites);
      UTIL.Notifications.createDangerNotification({
        message: "Removed from favorites.",
      });
    }
  };

  useEffect(() => {
    const favoritesStorage = UTIL.Storage.getFavoritesStorage();
    setFavorites([...favoritesStorage]);
  }, []);

  return (
    <FavoritesContext.Provider
      value={{ favoritesStorage, getFavorite, addFavorite, removeFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;
