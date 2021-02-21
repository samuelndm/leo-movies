const storageKey = process.env.REACT_APP_LOCAL_STORAGE_KEY;

const STORAGE_SCHEMA = { watchLater: [], favorites: [] };

export const getStorage = () => {
  const storage = JSON.parse(localStorage.getItem(storageKey));

  if (!storage) {
    localStorage.setItem(storageKey, JSON.stringify(STORAGE_SCHEMA));
  }

  return JSON.parse(localStorage.getItem(storageKey));
};

export const getFavoritesStorage = () => {
  const storage = getStorage();
  return storage?.favorites || [];
};

export const updateFavoritesStorage = (favorites) => {
  const storage = getStorage();
  storage.favorites = favorites;
  return localStorage.setItem(storageKey, JSON.stringify({ ...storage }));
};

export const deleteFavoritesStorage = () => {
  updateFavoritesStorage([]);
};

export const getWatchLaterListStorage = () => {
  const storage = getStorage();
  return storage?.watchLater || [];
};

export const updateWatchLaterStorage = (favorites) => {
  const storage = getStorage();
  storage.watchLater = favorites;
  return localStorage.setItem(storageKey, JSON.stringify({ ...storage }));
};

export const deleteWatchLaterStorage = () => {
  updateFavoritesStorage([]);
};
