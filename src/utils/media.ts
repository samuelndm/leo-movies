import { MEDIA_TYPES } from "./constants";

export const isMovie = (content) => {
  return !!(content?.release_date || content?.runtime);
};

export const isTvShow = (content) => {
  return !!(content?.first_air_date || content?.episode_run_time);
};

export const getMediaType = (content) => {
  switch (true) {
    case isMovie(content):
      return MEDIA_TYPES.MOVIE;
    case isTvShow(content):
      return MEDIA_TYPES.TV_SHOW;
    default:
      break;
  }
};
