import { createDangerNotification } from "utils/notifications";
import { ERROR } from "../messages";
import * as API_ENDPOINTS from "services/Endpoints";

export const loadTvShowDetailsById = async (id, params) => {
  try {
    const { data } = await API_ENDPOINTS.getTvShowDetailsById(id, params);
    return data || {};
  } catch (err) {
    console.error(err);
    createDangerNotification({
      message: err?.response?.data?.status_message || ERROR.DEFAULT,
    });

    return {};
  }
};

export const loadTvShowsList = async (params) => {
  try {
    const { data } = await API_ENDPOINTS.getTvShowsList(params);
    return data || {};
  } catch (err) {
    console.error(err);
    createDangerNotification({
      message: err?.response?.data?.status_message || ERROR.DEFAULT,
    });

    return {};
  }
};

export const loadPopularTvShows = async (params) => {
  try {
    const { data } = await API_ENDPOINTS.getPopularTvShows(params);
    return data || {};
  } catch (err) {
    console.error(err);
    createDangerNotification({
      message: err?.response?.data?.status_message || ERROR.DEFAULT,
    });

    return {};
  }
};

export const loadTvShowImagesById = async (id, params) => {
  try {
    const { data } = await API_ENDPOINTS.getTvShowImagesById(id, params);
    return data || {};
  } catch (err) {
    console.error(err);
    createDangerNotification({
      message: err?.response?.data?.status_message || ERROR.DEFAULT,
    });

    return {};
  }
};

export const loadSearchedTvShows = async (params) => {
  try {
    const { data } = await API_ENDPOINTS.getSearchedTvShows(params);
    return data || {};
  } catch (err) {
    console.error(err);
    createDangerNotification({
      message: err?.response?.data?.status_message || ERROR.DEFAULT,
    });

    return {};
  }
};
