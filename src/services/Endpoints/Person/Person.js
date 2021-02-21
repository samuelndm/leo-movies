import api from "services/api";

export const getPersonById = (id, params = {}) => {
  return api.get(`person/${id}`, {
    params: { ...params },
  });
};

export const getPopularPeople = (params = {}) => {
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
  return api.get(`search/person`, {
    params: { ...params },
  });
};

export const getPersonCreditsById = (id, params = {}) => {
  return api.get(`person/${id}/combined_credits`, {
    params: { ...params },
  });
};
