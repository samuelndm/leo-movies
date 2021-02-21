export const handleImageUrl = (imageUrl, imageSize) => {
  const baseUrl = `${process.env.REACT_APP_API_IMAGES}`;

  const url = imageUrl ? `${baseUrl}/${imageSize}${imageUrl}` : "";

  return url;
};

export const formatDateToYear = (date) => {
  return date?.split("-")?.[0] || "";
};

export const formatDateToSlash = (date) => {
  return date?.replaceAll("-", "/") || "";
};

export const formatGenres = (genres) => {
  return genres?.map(({ name }) => name)?.join(", ");
};

export const formatDuration = (duration) => {
  if (!Number.isInteger(duration)) {
    return "*";
  }

  if (duration >= 60) {
    const hour = Math.floor(duration / 60);
    const minutes = duration % 60;

    return `${hour}h ${minutes}m`;
  } else if (duration >= 0) {
    const minutes = duration;

    return `${minutes}m`;
  } else {
    const seconds = duration * 60;

    return `${seconds}s`;
  }
};
