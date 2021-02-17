import { createDangerNotification } from "utils/notifications";
import { getPopularMovies } from "services/Endpoints/Movie/Movie";

export const loadPopularMovies = async (params) => {
  try {
    const { data } = await getPopularMovies(params);
    return data?.results || [];
  } catch (err) {
    console.error(err);
    createDangerNotification({ message: err?.response?.data?.status_message });

    return [];
  }
};
