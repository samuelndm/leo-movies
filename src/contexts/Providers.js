import React from "react";
import FavoritesProvider from "./FavoritesProvider/FavoritesProvider";
import WatchLaterProvider from "./WatchLaterProvider/WatchLaterProvider";

const Providers = ({ children }) => {
  return (
    <FavoritesProvider>
      <WatchLaterProvider>{children}</WatchLaterProvider>
    </FavoritesProvider>
  );
};

export default Providers;
