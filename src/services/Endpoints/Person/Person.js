import api from "services/api";

export const getPersonDetailsById = (id, params = {}) => {
  return api.get(`person/${id}`, {
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

export const getSearchedPerson = (params = {}) => {
  return api.get(`search/person/`, {
    params: { ...params },
  });
};
