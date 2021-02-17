import { createDangerNotification } from "utils/notifications";
import { getPopularPersons } from "services/Endpoints/Person/Person";

export const loadPopularPersons = async (params) => {
  try {
    const { data } = await getPopularPersons(params);
    return data?.results || [];
  } catch (err) {
    console.error(err);
    createDangerNotification({ message: err?.response?.data?.status_message });

    return [];
  }
};
