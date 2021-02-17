import api from "services/api";

export const getPopularTvShows = (params = {}) => {
  return api.get("3/tv/popular", {
    params: { ...params },
  });
};

export const getTvShowImagesById = (id, params = {}) => {
  return api.get(`3/tv/${id}/images`, {
    params: { ...params },
  });
};
