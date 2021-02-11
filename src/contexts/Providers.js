import React from "react";
import NotificationProvider from "./NotificationProvider";

const Providers = ({ children }) => {
  return <NotificationProvider>{children}</NotificationProvider>;
};

export default Providers;
