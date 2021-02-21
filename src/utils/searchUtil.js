import { URL_PARAMS } from "./constants";

export const getSearchParam = (history) => {
  const urlParams = new URLSearchParams(history?.location?.search);
  const searchParam = urlParams.get(URL_PARAMS.SEARCH);

  return searchParam || "";
};
