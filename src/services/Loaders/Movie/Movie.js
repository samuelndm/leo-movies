import { createDangerNotification } from "utils/notifications";
import * as API_ENDPOINTS from "services/Endpoints";
import { ERROR } from "../messages";

export const loadMovieById = async (id, params) => {
  try {
    const { data } = await API_ENDPOINTS.getMovieById(id, params);
    return data || {};
  } catch (err) {
    console.error(err);
    createDangerNotification({
      message: err?.response?.data?.status_message || ERROR.DEFAULT,
    });

    return {};
  }
};

export const loadMoviesList = async (params) => {
  try {
    const { data } = await API_ENDPOINTS.getMoviesList(params);
    return data || {};
  } catch (err) {
    console.error(err);
    createDangerNotification({
      message: err?.response?.data?.status_message || ERROR.DEFAULT,
    });

    return {};
  }
};

export const loadPopularMovies = async (params) => {
  try {
    const { data } = await API_ENDPOINTS.getPopularMovies(params);
    return data || {};
  } catch (err) {
    console.error(err);
    createDangerNotification({
      message: err?.response?.data?.status_message || ERROR.DEFAULT,
    });

    return {};
  }
};

export const loadMovieImagesById = async (id, params) => {
  try {
    const { data } = await API_ENDPOINTS.getMovieImagesById(id, params);
    return data || {};
  } catch (err) {
    console.error(err);
    createDangerNotification({
      message: err?.response?.data?.status_message || ERROR.DEFAULT,
    });

    return {};
  }
};

export const loadSearchedMovies = async (params) => {
  try {
    const { data } = await API_ENDPOINTS.getSearchedMovies(params);
    return data || {};
  } catch (err) {
    console.error(err);
    createDangerNotification({
      message: err?.response?.data?.status_message || ERROR.DEFAULT,
    });

    return {};
  }
};

export const loadMovieCreditsById = async (id, params) => {
  try {
    const { data } = await API_ENDPOINTS.getMovieCreditsById(id, params);
    return data || {};
  } catch (err) {
    console.error(err);
    createDangerNotification({
      message: err?.response?.data?.status_message || ERROR.DEFAULT,
    });

    return {};
  }
};

export const loadMovieVideosById = async (id, params) => {
  try {
    const { data } = await API_ENDPOINTS.getMovieVideosById(id, params);
    return data?.results || [];
  } catch (err) {
    console.error(err);
    createDangerNotification({
      message: err?.response?.data?.status_message || ERROR.DEFAULT,
    });

    return [];
  }
};
