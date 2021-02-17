import api from "services/api";

export const getPopularPersons = (params = {}) => {
  return api.get("3/person/popular", {
    params: { ...params },
  });
};

export const getPersonById = (id, params = {}) => {
  return api.get(`3/person/${id}/images`, {
    params: { ...params },
  });
};
