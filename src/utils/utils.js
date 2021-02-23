export const isExternalUrl = (url) => {
  if (url) {
    const regex = /http:|https:|www\./g;
    return regex.test(url);
  }

  return false;
};

export const getRandomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const createEmptyArray = (size, type) => {
  let children;

  switch (type) {
    case "object":
      children = {};
      break;
    case "undefined":
      children = undefined;
      break;
    case "string":
      children = "";
      break;
    default:
      children = null;
      break;
  }

  const array = [];
  if (size && Number.isInteger(size)) {
    for (let i = 0; i < size; i++) {
      array.push(children);
    }
  }

  return array;
};

export const createArrayOfGivenNumber = (number, reverse) => {
  if (number && Number.isInteger(number)) {
    const tmpPages = [];

    if (reverse) {
      for (let i = number - 1; i >= 0; i--) {
        tmpPages.push(i);
      }
    } else {
      for (let i = 0; i < number; i++) {
        tmpPages.push(i);
      }
    }
    return tmpPages;
  }
  return [];
};

export const resizeArray = (array, maxAmount) => {
  const newArray = [];

  if (array && array.length && Number.isInteger(maxAmount)) {
    array.forEach((item, index) => {
      if (index < maxAmount) {
        newArray.push(item);
      }
    });
  }

  return newArray;
};

export const removeDuplicatesByKey = (array, Key) => {
  const newArray = [];
  const tempObject = {};

  if (array) {
    for (let i = 0; i < array.length; i++) {
      const item = array[i];
      if (!tempObject[item[Key]]) {
        newArray.push(item);
        tempObject[item[Key]] = item[Key];
      }
    }
  }

  return newArray;
};

export const normalizeString = (string) => {
  let newString = "";
  if (string) {
    newString = string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }
  return newString;
};

export const formatCurrency = (value) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

export const ScrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export const ScrollToBottom = () => {
  window.scrollTo({
    top: document.body.scrollHeight || document.documentElement.ScrollHeight,
    behavior: "smooth",
  });
};

export const updateUrlParamByKey = (search, key, newValue) => {
  const params = search?.split("?")?.[1]?.split("&") || [];
  let hasFound = false;

  const newParams = params.map((param) => {
    const paramKey = param?.split("=")?.[0];
    if (paramKey === key) {
      hasFound = true;
      return `${key}=${newValue}`;
    }
    return param;
  });

  if (!hasFound) {
    newParams.push(`${key}=${newValue}`);
  }

  return `?${newParams?.join("&") || ""}`;
};

export const removeUrlParamByKey = (search, key) => {
  const params = search?.split("?")?.[1]?.split("&") || [];

  const newParams = params.filter((param) => {
    const paramKey = param?.split("=")?.[0];
    return paramKey !== key;
  });

  return `?${newParams?.join("&") || ""}`;
};

export const removeElementsAttrByQuery = (query, attr) => {
  const elements = document.querySelectorAll(query);

  elements.forEach((element) => {
    element?.removeAttribute(attr);
  });
};

export const splitParagraphs = (text) => {
  return text?.match(/[^\r\n]+/g) || [];
};
