import React, { useEffect, useState } from "react";
import { useFavoritesContext } from "contexts";
import { MEDIA_TYPES } from "utils/constants";
import * as API from "services/Loaders";
import * as S from "./styles";
import * as Card from "components/Cards";
import { ScrollToTop } from "utils/utils";

const FavoritesPage = () => {
  const { favoritesStorage } = useFavoritesContext();
  const [favorites, setFavorites] = useState([]);

  const loadData = async (watchLaterStorage) => {
    watchLaterStorage?.forEach(async (watchLater) => {
      const watchLaterType = watchLater?.media_type;
      let response = {};

      if (watchLaterType === MEDIA_TYPES.MOVIE) {
        response = await API.loadMovieById(watchLater?.id);
      } else if (watchLaterType === MEDIA_TYPES.TV_SHOW) {
        response = await API.loadTvShowById(watchLater?.id);
      }

      setFavorites((prev) => [
        ...prev,
        { ...response, media_type: watchLaterType },
      ]);
    });
  };

  useEffect(() => {
    ScrollToTop();
    return loadData(favoritesStorage);
  }, [favoritesStorage]);

  return (
    <S.Container style={{ margin: "50px 0 0" }}>
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
              <Card.MediaPreview preview={favorite} showVoteAverage />
            </S.FlexItem>
          ))}
        </S.FlexContainer>
      </S.Content>
    </S.Container>
  );
};

export default FavoritesPage;
