import { store } from "react-notifications-component";

const notification = {
  type: "default",
  insert: "center",
  container: "top-right",
  animationIn: ["animate__animated", "animate__fadeIn"],
  animationOut: ["animate__animated", "animate__fadeOut"],
  dismiss: {
    duration: 5000,
    onScreen: true,
    showIcon: true,
  },
};

export const createDefaultNotification = (newNotification) => {
  const { title, message, duration } = newNotification;

  store.addNotification({
    ...notification,
    title,
    message,
    dismiss: {
      ...notification.dismiss,
      duration: duration || notification.dismiss.duration,
    },
  });
};

export const createSuccessNotification = (newNotification) => {
  const { title, message, duration } = newNotification;

  store.addNotification({
    ...notification,
    type: "success",
    title,
    message,
    dismiss: {
      ...notification.dismiss,
      duration: duration || notification.dismiss.duration,
    },
  });
};

export const createDangerNotification = (newNotification) => {
  const { title, message, duration } = newNotification;

  store.addNotification({
    ...notification,
    type: "danger",
    title,
    message,
    dismiss: {
      ...notification.dismiss,
      duration: duration || notification.dismiss.duration,
    },
  });
};

export const createInfoNotification = (newNotification) => {
  const { title, message, duration } = newNotification;

  store.addNotification({
    ...notification,
    type: "info",
    title,
    message,
    dismiss: {
      ...notification.dismiss,
      duration: duration || notification.dismiss.duration,
    },
  });
};

export const createWarningNotification = (newNotification) => {
  const { title, message, duration } = newNotification;

  store.addNotification({
    ...notification,
    type: "warning",
    title,
    message,
    dismiss: {
      ...notification.dismiss,
      duration: duration || notification.dismiss.duration,
    },
  });
};
