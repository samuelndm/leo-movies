import React, { useEffect, useState } from "react";
import { useFavoritesContext } from "contexts";
import * as API from "services/middleware";
import * as UTIL from "utils";
import * as S from "./styles";
import * as C from "components";

const FavoritesPage = () => {
  const { favoritesStorage } = useFavoritesContext();
  const [favorites, setFavorites] = useState([]);

  const loadData = async (favoritesStorage) => {
    favoritesStorage?.forEach(async (favorite) => {
      const favoriteType = favorite?.media_type;
      let response = {};

      switch (favoriteType) {
        case UTIL.Contants.MEDIA_TYPES.MOVIE:
          response = await API.loadMovieById(favorite?.id);
          break;
        case UTIL.Contants.MEDIA_TYPES.TV_SHOW:
          response = await API.loadTvShowById(favorite?.id);
          break;

        default:
          break;
      }

      setFavorites((prev) => [
        ...prev,
        { ...response, media_type: favoriteType },
      ]);
    });
  };

  useEffect(() => {
    return loadData(favoritesStorage);
  }, [favoritesStorage]);

  return (
    <S.Container>
      <S.Content>
        <S.Title>
          {favoritesStorage?.length
            ? "Favorites"
            : "No media added to favorites"}
        </S.Title>

        <S.FlexContainer>
          {favorites?.map((favorite, index) => (
            <S.FlexItem
              lg={2}
              xs={12}
              margin='15px'
              key={`favoritePreview-${favorite?.id || index}`}
            >
              <C.Card.MediaPreview preview={favorite} showVoteAverage />
            </S.FlexItem>
          ))}
        </S.FlexContainer>
      </S.Content>
    </S.Container>
  );
};

export default FavoritesPage;
