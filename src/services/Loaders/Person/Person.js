import { createDangerNotification } from "utils/notifications";
import * as API_ENDPOINTS from "services/Endpoints";

export const loadPersonDetailsById = async (id, params) => {
  try {
    const { data } = await API_ENDPOINTS.getPersonDetailsById(id, params);
    return data || {};
  } catch (err) {
    console.error(err);
    createDangerNotification({ message: err?.response?.data?.status_message });

    return {};
  }
};

export const loadPopularPersons = async (params) => {
  try {
    const { data } = await API_ENDPOINTS.getPopularPersons(params);
    return data || {};
  } catch (err) {
    console.error(err);
    createDangerNotification({ message: err?.response?.data?.status_message });

    return {};
  }
};

export const loadPersonImagesById = async (id, params) => {
  try {
    const { data } = await API_ENDPOINTS.getPersonImagesById(id, params);
    return data || {};
  } catch (err) {
    console.error(err);
    createDangerNotification({ message: err?.response?.data?.status_message });

    return {};
  }
};

export const loadSearchedPersons = async (params) => {
  try {
    const { data } = await API_ENDPOINTS.getSearchedPerson(params);
    return data || {};
  } catch (err) {
    console.error(err);
    createDangerNotification({ message: err?.response?.data?.status_message });

    return {};
  }
};
