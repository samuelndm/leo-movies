import { createDangerNotification } from "utils/notifications";
import * as API_ENDPOINTS from "services/Endpoints";
import { ERROR } from "../messages";

export const loadPersonById = async (id, params) => {
  try {
    const { data } = await API_ENDPOINTS.getPersonById(id, params);
    return data || {};
  } catch (err) {
    console.error(err);
    createDangerNotification({
      message: err?.response?.data?.status_message || ERROR.DEFAULT,
    });

    return {};
  }
};

export const loadPopularPeople = async (params) => {
  try {
    const { data } = await API_ENDPOINTS.getPopularPeople(params);
    return data || {};
  } catch (err) {
    console.error(err);
    createDangerNotification({
      message: err?.response?.data?.status_message || ERROR.DEFAULT,
    });

    return {};
  }
};

export const loadPersonImagesById = async (id, params) => {
  try {
    const { data } = await API_ENDPOINTS.getPersonImagesById(id, params);
    return data || {};
  } catch (err) {
    console.error(err);
    createDangerNotification({
      message: err?.response?.data?.status_message || ERROR.DEFAULT,
    });

    return {};
  }
};

export const loadSearchedPeople = async (params) => {
  try {
    const { data } = await API_ENDPOINTS.getSearchedPerson(params);
    return data || {};
  } catch (err) {
    console.error(err);
    createDangerNotification({
      message: err?.response?.data?.status_message || ERROR.DEFAULT,
    });

    return {};
  }
};

export const loadPersonCreditsById = async (id, params) => {
  try {
    const { data } = await API_ENDPOINTS.getPersonCreditsById(id, params);
    return data || {};
  } catch (err) {
    console.error(err);
    createDangerNotification({
      message: err?.response?.data?.status_message || ERROR.DEFAULT,
    });

    return {};
  }
};
