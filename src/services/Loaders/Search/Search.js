import * as API_ENDPOINTS from "services/Endpoints";
import * as UTIl from "utils";
import * as Messages from "../messages";

export const loadSearchedKeyword = async (params) => {
  try {
    const { data } = await API_ENDPOINTS.getSearcheKeyword(params);
    return data || {};
  } catch (err) {
    console.error(err);
    UTIl.Notifications.createDangerNotification({
      message: err?.response?.data?.status_message || Messages.ERROR.DEFAULT,
    });

    return {};
  }
};
