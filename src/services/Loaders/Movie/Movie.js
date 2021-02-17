import { createDangerNotification } from "utils/notifications";
import * as API_ENDPOINTS from "services/Endpoints";

export const loadMovieDetailsById = async (id, params) => {
  try {
    const { data } = await API_ENDPOINTS.getMovieDetailsById(id, params);
    return data || {};
  } catch (err) {
    console.error(err);
    createDangerNotification({ message: err?.response?.data?.status_message });

    return {};
  }
};

export const loadPopularMovies = async (params) => {
  try {
    const { data } = await API_ENDPOINTS.getPopularMovies(params);
    return data?.results || [];
  } catch (err) {
    console.error(err);
    createDangerNotification({ message: err?.response?.data?.status_message });

    return [];
  }
};

export const loadMovieImagesById = async (id, params) => {
  try {
    const { data } = await API_ENDPOINTS.getMovieImagesById(id, params);
    return data || {};
  } catch (err) {
    console.error(err);
    createDangerNotification({ message: err?.response?.data?.status_message });

    return {};
  }
};
