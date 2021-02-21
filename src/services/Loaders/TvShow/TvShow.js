import { createDangerNotification } from "utils/notifications";
import { ERROR } from "../messages";
import * as API_ENDPOINTS from "services/Endpoints";

export const loadTvShowById = async (id, params) => {
  try {
    const { data } = await API_ENDPOINTS.getTvShowById(id, params);
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

export const loadTvShowCreditsById = async (id, params) => {
  try {
    const { data } = await API_ENDPOINTS.getTvShowCreditsById(id, params);
    return data || {};
  } catch (err) {
    console.error(err);
    createDangerNotification({
      message: err?.response?.data?.status_message || ERROR.DEFAULT,
    });

    return {};
  }
};

export const loadTvShowVideosById = async (id, params) => {
  try {
    const { data } = await API_ENDPOINTS.getTvShowVideosById(id, params);
    return data?.results || [];
  } catch (err) {
    console.error(err);
    createDangerNotification({
      message: err?.response?.data?.status_message || ERROR.DEFAULT,
    });

    return [];
  }
};
