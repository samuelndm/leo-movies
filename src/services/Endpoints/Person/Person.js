import api from "services/api";

export const getPersonDetailsById = (id, params = {}) => {
  return api.get(`person/${id}`, {
    params: { ...params },
  });
};

export const getPersonsList = (params = {}) => {
  return api.get(`person/items`, {
    params: { ...params },
  });
};

export const getPopularPersons = (params = {}) => {
  return api.get("person/popular", {
    params: { ...params },
  });
};

export const getPersonImagesById = (id, params = {}) => {
  return api.get(`person/${id}/images`, {
    params: { ...params },
  });
};
