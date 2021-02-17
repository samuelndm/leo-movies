import api from "services/api";

export const getMovieDetailsById = (id, params = {}) => {
  return api.get(`movie/${id}`, {
    params: { ...params },
  });
};

export const getMoviesList = (params = {}) => {
  return api.get(`discover/movie`, {
    params: { ...params },
  });
};

export const getPopularMovies = (params = {}) => {
  return api.get("movie/popular", {
    params: { ...params },
  });
};

export const getMovieImagesById = (id, params = {}) => {
  return api.get(`movie/${id}/images`, {
    params: { ...params },
  });
};
