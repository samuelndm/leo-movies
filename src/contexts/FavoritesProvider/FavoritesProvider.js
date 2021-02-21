import React, { createContext, useContext, useEffect, useState } from "react";
import * as STORAGE from "utils/storage";
import * as NF from "utils/notifications";

const FavoritesContext = createContext();

export const useFavoritesContext = () => useContext(FavoritesContext);

const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const getFavorite = (favoriteId) => {
    return favorites.find((id) => id === favoriteId);
  };

  const addFavorite = (favoriteId) => {
    const hasFavorite = getFavorite(favoriteId);

    if (!hasFavorite) {
      const newFavorites = [...favorites, favoriteId];
      setFavorites(newFavorites);
      STORAGE.updateFavoritesStorage(newFavorites);
      NF.createSuccessNotification({ message: "Added to favorites." });
    }
  };

  const removeFavorite = (favoriteId) => {
    const hasFavorite = getFavorite(favoriteId);

    if (hasFavorite) {
      const newFavorites = favorites?.filter((id) => id !== favoriteId);
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
      value={{ favorites, getFavorite, addFavorite, removeFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;
