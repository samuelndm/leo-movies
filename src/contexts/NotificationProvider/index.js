import React, { createContext, useContext, useRef } from "react";
import PropTypes from "prop-types";
import { SnackbarProvider } from "notistack";
import * as S from "./styles";

export const NotificationContext = createContext();

export const useNotificationContext = () => useContext(NotificationContext);

const NotificationProvider = ({ children }) => {
  const snackbarProviderRef = useRef();
  const TIME_DEFAULT = 5000;
  const NOTIFICATION_TYPES = {
    DEFAULT: "default",
    SUCCESS: "success", // This is a success message!
    ERROR: "error", // This is an error message!
    WARNING: "warning", // This is a warning message!
    INFO: "info", // This is an information message!
  };

  const actionDefault = (key) => {
    return (
      <S.CloseSpan
        onClick={(e) => {
          closeNotification(key);
        }}
      >
        &#10006;
      </S.CloseSpan>
    );
  };

  const createNotification = (notification) => {
    const {
      type,
      message,
      time,
      vertical,
      horizontal,
      persist,
      action,
    } = notification;

    return snackbarProviderRef.current.enqueueSnackbar(message, {
      variant: type || NOTIFICATION_TYPES.DEFAULT,
      autoHideDuration: time || TIME_DEFAULT,
      persist: persist || false,
      preventDuplicate: false,
      action: action || actionDefault,

      anchorOrigin: {
        vertical: vertical || "bottom",
        horizontal: horizontal || "right",
      },
    });
  };

  const closeNotification = (notification) => {
    return snackbarProviderRef.current.closeSnackbar(notification);
  };

  return (
    <SnackbarProvider ref={snackbarProviderRef}>
      <NotificationContext.Provider
        value={{ createNotification, closeNotification, NOTIFICATION_TYPES }}
      >
        {children}
      </NotificationContext.Provider>
    </SnackbarProvider>
  );
};

NotificationProvider.propTypes = {
  children: PropTypes.element,
};

export default NotificationProvider;
