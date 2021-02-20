export const handleImageUrl = (imageUrl, imageSize) => {
  const baseUrl = `${process.env.REACT_APP_API_IMAGES}`;

  const url = imageUrl ? `${baseUrl}/${imageSize}${imageUrl}` : "";

  return url;
};
