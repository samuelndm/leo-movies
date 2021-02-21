import api from "services/api";

export const getMovieById = (id, params = {}) => {
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

export const getSearchedMovies = (params = {}) => {
  return api.get(`search/movie`, {
    params: { ...params },
  });
};

export const getMovieCreditsById = (id, params = {}) => {
  return api.get(`movie/${id}/credits`, {
    params: { ...params },
  });
};

export const getMovieVideosById = (id, params = {}) => {
  return api.get(`movie/${id}/videos`, {
    params: { ...params },
  });
};
