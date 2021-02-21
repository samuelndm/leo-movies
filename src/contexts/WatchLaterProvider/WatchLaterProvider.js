import React, { createContext, useContext, useEffect, useState } from "react";
import * as UTIL from "utils/mediaUtil";
import * as STORAGE from "utils/storage";
import * as NF from "utils/notifications";

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
        media_type: UTIL.getMediaType(watchLater),
      };
      const newWatchLaterList = [...watchLaterStorage, newWatchLater];
      setWatchLaterList(newWatchLaterList);
      STORAGE.updateWatchLaterStorage(newWatchLaterList);
      NF.createSuccessNotification({ message: "Added to watch later." });
    }
  };

  const removeWatchLater = (watchLater) => {
    const hasWatchLater = getWatchLater(watchLater?.id);

    if (hasWatchLater) {
      const newWatchLaterList = watchLaterStorage?.filter(
        (watchLaterStorage) => watchLaterStorage?.id !== watchLater?.id
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
