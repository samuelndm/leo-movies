import { createDangerNotification } from "utils/notifications";
import * as API_ENDPOINTS from "services/Endpoints";
import { ERROR } from "../messages";

export const loadSearchedKeyword = async (params) => {
  try {
    const { data } = await API_ENDPOINTS.getSearcheKeyword(params);
    return data || {};
  } catch (err) {
    console.error(err);
    createDangerNotification({
      message: err?.response?.data?.status_message || ERROR.DEFAULT,
    });

    return {};
  }
};
