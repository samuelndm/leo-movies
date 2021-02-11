import api from "../api";

export const getEndpoint = (endpoint, params = {}) =>
  api.get(endpoint, {
    params: {
      ...params,
    },
  });
