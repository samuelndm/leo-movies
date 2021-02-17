import api from "services/api";

export const getPopularMovies = (params = {}) => {
  return api.get("3/movie/popular", {
    params: { ...params },
  });
};

export const getMovieImagesById = (id, params = {}) => {
  return api.get(`3/movie/${id}/images`, {
    params: { ...params },
  });
};
