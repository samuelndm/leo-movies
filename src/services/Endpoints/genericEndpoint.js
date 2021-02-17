import api from "services/api";

export const getEndpoint = (endpoint, params = {}) =>
  api.get(endpoint, {
    params: {
      ...params,
    },
  });
