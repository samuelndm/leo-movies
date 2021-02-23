import React, { createContext, useContext, useEffect, useState } from "react";
import * as UTIL from "utils";

const WatchLaterContext = createContext();

export const useWatchLaterContext = () => useContext(WatchLaterContext);

const WatchLaterProvider = ({ children }) => {
  const [watchLaterStorage, setWatchLaterList] = useState([]);

  const getWatchLater = (watchLaterId) => {
    return watchLaterStorage.find(
      (watchLaterStorage) => watchLaterStorage?.id === watchLaterId
    );
  };

  const addWatchLater = (watchLater) => {
    const hasWatchLater = getWatchLater(watchLater?.id);

    if (!hasWatchLater) {
      const newWatchLater = {
        id: watchLater?.id,
        media_type: UTIL.Media.getMediaType(watchLater),
      };
      const newWatchLaterList = [...watchLaterStorage, newWatchLater];
      setWatchLaterList(newWatchLaterList);
      UTIL.Storage.updateWatchLaterStorage(newWatchLaterList);
      UTIL.Notifications.createSuccessNotification({
        message: "Added to watch later.",
      });
    }
  };

  const removeWatchLater = (watchLater) => {
    const hasWatchLater = getWatchLater(watchLater?.id);

    if (hasWatchLater) {
      const newWatchLaterList = watchLaterStorage?.filter(
        (watchLaterStorage) => watchLaterStorage?.id !== watchLater?.id
      );
      setWatchLaterList(newWatchLaterList);
      UTIL.Storage.updateWatchLaterStorage(newWatchLaterList);
      UTIL.Notifications.createDangerNotification({
        message: "Removed from watch later.",
      });
    }
  };

  useEffect(() => {
    const watchLaterStorage = UTIL.Storage.getWatchLaterListStorage();
    setWatchLaterList([...watchLaterStorage]);
  }, []);

  return (
    <WatchLaterContext.Provider
      value={{
        watchLaterStorage,
        getWatchLater,
        addWatchLater,
        removeWatchLater,
      }}
    >
      {children}
    </WatchLaterContext.Provider>
  );
};

export default WatchLaterProvider;
