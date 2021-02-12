import { createDangerNotification } from "../../utils/notifications";
import { getPopularMovies } from "../../services/endpoints/Movies/Movies";
import { getPopularTvShows } from "../../services/endpoints/TvShows/TvShows";

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
