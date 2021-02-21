import React, { createContext, useContext, useEffect, useState } from "react";
import * as UTIL from "utils/mediaUtil";
import * as STORAGE from "utils/storage";
import * as NF from "utils/notifications";

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
        media_type: UTIL.getMediaType(favorite),
      };

      const newFavorites = [...favoritesStorage, newFavorite];
      setFavorites(newFavorites);
      STORAGE.updateFavoritesStorage(newFavorites);
      NF.createSuccessNotification({ message: "Added to favorites." });
    }
  };

  const removeFavorite = (favorite) => {
    const hasFavorite = getFavorite(favorite?.id);

    if (hasFavorite) {
      const newFavorites = favoritesStorage?.filter(
        (favoriteStorage) => favoriteStorage?.id !== favorite?.id
      );
      setFavorites(newFavorites);
      STORAGE.updateFavoritesStorage(newFavorites);
      NF.createDangerNotification({ message: "Removed from favorites." });
    }
  };

  useEffect(() => {
    const favoritesStorage = STORAGE.getFavoritesStorage();
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
