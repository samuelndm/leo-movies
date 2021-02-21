import api from "services/api";

export const getSearcheKeyword = (params = {}) => {
  return api.get(`search/multi`, {
    params: { ...params },
  });
};
