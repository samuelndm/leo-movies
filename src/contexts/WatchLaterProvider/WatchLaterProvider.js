import React, { createContext, useContext, useEffect, useState } from "react";
import * as STORAGE from "utils/storage";
import * as NF from "utils/notifications";

const WatchLaterContext = createContext();

export const useWatchLaterContext = () => useContext(WatchLaterContext);

const WatchLaterProvider = ({ children }) => {
  const [watchLaterList, setWatchLaterList] = useState([]);

  const getWatchLater = (watchLaterId) => {
    return watchLaterList.find((id) => id === watchLaterId);
  };

  const addWatchLater = (watchLaterId) => {
    const hasWatchLater = getWatchLater(watchLaterId);

    if (!hasWatchLater) {
      const newWatchLaterList = [...watchLaterList, watchLaterId];
      setWatchLaterList(newWatchLaterList);
      STORAGE.updateWatchLaterStorage(newWatchLaterList);
      NF.createSuccessNotification({ message: "Added to watch later." });
    }
  };

  const removeWatchLater = (favoriteId) => {
    const hasWatchLater = getWatchLater(favoriteId);

    if (hasWatchLater) {
      const newWatchLaterList = watchLaterList?.filter(
        (id) => id !== favoriteId
      );
      setWatchLaterList(newWatchLaterList);
      STORAGE.updateWatchLaterStorage(newWatchLaterList);
      NF.createDangerNotification({
        message: "Removed from watch later.",
      });
    }
  };

  useEffect(() => {
    const watchLaterStorage = STORAGE.getWatchLaterListStorage();
    setWatchLaterList([...watchLaterStorage]);
  }, []);

  return (
    <WatchLaterContext.Provider
      value={{ watchLaterList, getWatchLater, addWatchLater, removeWatchLater }}
    >
      {children}
    </WatchLaterContext.Provider>
  );
};

export default WatchLaterProvider;
