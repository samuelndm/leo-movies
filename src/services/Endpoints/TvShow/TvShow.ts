import api from "services/api";

export const getTvShowById = (id, params = {}) => {
  return api.get(`tv/${id}`, {
    params: { ...params },
  });
};

export const getTvShowsList = (params = {}) => {
  return api.get(`discover/tv`, {
    params: { ...params },
  });
};

export const getPopularTvShows = (params = {}) => {
  return api.get("tv/popular", {
    params: { ...params },
  });
};

export const getTvShowImagesById = (id, params = {}) => {
  return api.get(`tv/${id}/images`, {
    params: { ...params },
  });
};

export const getSearchedTvShows = (params = {}) => {
  return api.get(`search/tv`, {
    params: { ...params },
  });
};

export const getTvShowCreditsById = (id, params = {}) => {
  return api.get(`tv/${id}/credits`, {
    params: { ...params },
  });
};

export const getTvShowVideosById = (id, params = {}) => {
  return api.get(`tv/${id}/videos`, {
    params: { ...params },
  });
};
