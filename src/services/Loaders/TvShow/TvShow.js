import { createDangerNotification } from "utils/notifications";
import { getPopularTvShows } from "services/Endpoints/TvShow/TvShow";

export const loadPopularTvShows = async (params) => {
  try {
    const { data } = await getPopularTvShows(params);
    return data?.results || [];
  } catch (err) {
    console.error(err);
    createDangerNotification({ message: err?.response?.data?.status_message });

    return [];
  }
};
