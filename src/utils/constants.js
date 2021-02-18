export const URL_PARAMS = {
  SEARCH: "search",
};

export const SORT_BY = {
  POPULARITY_ASC: "popularity.asc",
  POPULARITY_DESC: "popularity.desc",
  RELEASE_DATE_ASC: "release_date.asc",
  RELEASE_DATE_DESC: "release_date.desc",
  REVENUE_ASC: "revenue.asc",
  REVENUE_DESC: "revenue.desc",
  PRIMARY_RELEASE_DATE_ASC: "primary_release_date.asc",
  PRIMARY_RELEASE_DATE_DESC: "primary_release_date.desc",
  TITLE_ASC: "title.asc",
  TITLE_DESC: "title.desc",
  VOTE_AVERAGE_ASC: "vote_average.asc",
  VOTE_AVERAGE_DESC: "vote_average.desc",
  VOTE_COUNT_ASC: "vote_count.asc",
  VOTE_COUNT_DESC: "vote_count.desc",
};

export const SORT_BY_LIST = [
  {
    label: "Popularity Descending",
    value: SORT_BY.POPULARITY_DESC,
  },
  {
    label: "Popularity Ascending",
    value: SORT_BY.POPULARITY_ASC,
  },
  {
    label: "Title (A-Z)",
    value: SORT_BY.TITLE_ASC,
  },
  {
    label: "Title (Z-A)",
    value: SORT_BY.TITLE_DESC,
  },
  {
    label: "Rating Descending",
    value: SORT_BY.VOTE_AVERAGE_DESC,
  },
  {
    label: "Rating Ascending",
    value: SORT_BY.VOTE_AVERAGE_ASC,
  },
  {
    label: "Release Date Descending",
    value: SORT_BY.RELEASE_DATE_DESC,
  },
  {
    label: "Release Date Ascending",
    value: SORT_BY.RELEASE_DATE_ASC,
  },
];

export const IMAGE_SIZES = {
  ORIGINAL: "original",

  BACKDROP_SIZES: {
    WIDTH_45: "w45",
    WIDTH_92: "w92",
    WIDTH_154: "w154",
    WIDTH_185: "w185",
    WIDTH_300: "w300",
    WIDTH_500: "w500",
    WIDTH_780: "w780",
    WIDTH_1280: "w1280",
    WIDTH_1920: "w1920",
  },

  LOGO_SIZES: {
    WIDTH_45: "w45",
    WIDTH_92: "w92",
    WIDTH_154: "w154",
    WIDTH_185: "w185",
    WIDTH_300: "w300",
    WIDTH_500: "w500",
  },

  POSTER_SIZES: {
    WIDTH_45: "w45",
    WIDTH_92: "w92",
    WIDTH_154: "w154",
    WIDTH_185: "w185",
    WIDTH_300: "w300",
    WIDTH_342: "w342",
    WIDTH_500: "w500",
    WIDTH_780: "w780",
  },

  PROFILE_SIZES: {
    WIDTH_45: "w45",
    WIDTH_92: "w92",
    WIDTH_154: "w154",
    WIDTH_185: "w185",
    WIDTH_632: "w632",
    WIDTH_780: "w780",
  },

  STILL_SIZES: {
    WIDTH_45: "w45",
    WIDTH_92: "w92",
    WIDTH_154: "w154",
    WIDTH_185: "w185",
    WIDTH_632: "w300",
  },
};
