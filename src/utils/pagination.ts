import { updateUrlParamByKey } from "utils/utils";

const URL_PARAMS = {
  PER_PAGE_KEY: "per_page",
  PAGE_KEY: "page",
};

export const handleCurrentPerPage = (search, itemsPerPage, totalItems) => {
  const perPageParam = getPerPageParam(search);
  const isValid = isPerPageValid(perPageParam, totalItems);
  const isValidWithTotal = isPerPageValid(perPageParam);

  if (isValidWithTotal) {
    return perPageParam;
  } else if (isValid && totalItems) {
    return totalItems;
  } else {
    return itemsPerPage || 9;
  }
};

export const handleCurrentPage = (
  search,
  initialPage,
  totalItems,
  numberOfPages
) => {
  const PageParam = getPageParam(search);
  const isValid = isPageValid(PageParam);
  const isValidWithTotal = isPageValid(PageParam, numberOfPages);

  if (totalItems) {
    if (isValidWithTotal) {
      return PageParam;
    } else if (isValid && PageParam > numberOfPages) {
      return numberOfPages;
    } else {
      return initialPage || 1;
    }
  } else {
    if (isValid) {
      return PageParam;
    } else {
      return initialPage || 1;
    }
  }
};

export const getPerPageParam = (search) => {
  const params = new URLSearchParams(search);
  const param = params.get(URL_PARAMS.PER_PAGE_KEY);
  const perPage =
    param !== null && param !== undefined ? parseInt(param) : null;

  return perPage;
};

export const getPageParam = (search) => {
  const params = new URLSearchParams(search);
  const param = params.get(URL_PARAMS.PAGE_KEY);
  const page = param !== null && param !== undefined ? parseInt(param) : null;

  return page;
};

export const isPerPageValid = (param, totalItems) => {
  if (totalItems) {
    return (
      param !== null && param !== undefined && param > 0 && param <= totalItems
    );
  }
  return param !== null && param !== undefined && param > 0;
};

export const isPageValid = (param, numberOfPages) => {
  if (numberOfPages) {
    return (
      param !== null &&
      param !== undefined &&
      param > 0 &&
      param <= numberOfPages
    );
  }

  return param !== null && param !== undefined && param > 0;
};

export const updatePaginationUrl = (history, pageValue, perPageValue) => {
  let newParams = updateUrlParamByKey(
    history.location.search,
    URL_PARAMS.PER_PAGE_KEY,
    perPageValue
  );

  newParams = updateUrlParamByKey(newParams, URL_PARAMS.PAGE_KEY, pageValue);

  history?.push({
    pathname: history.location.pathame,
    search: newParams,
  });
};

export const resetPaginationUrl = (history) => {
  let newParams = updateUrlParamByKey(
    history.location.search,
    URL_PARAMS.PER_PAGE_KEY,
    12
  );

  newParams = updateUrlParamByKey(newParams, URL_PARAMS.PAGE_KEY, 1);

  history?.push({
    pathname: history.location.pathame,
    search: newParams,
  });
};

export const getNumberOfPages = (perPage, totalItems) => {
  const isOnePage = totalItems < perPage;
  const numberOfPages = isOnePage ? 1 : Math.ceil(totalItems / perPage);

  return numberOfPages;
};
