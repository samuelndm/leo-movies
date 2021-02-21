import React, { useEffect, useState } from "react";
import { useFavoritesContext } from "contexts";
import { MEDIA_TYPES } from "utils/constants";
import * as API from "services/Loaders";
import * as GS from "assets/styles/GlobalStyles";
import * as Card from "components/Cards";

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
    return loadData(favoritesStorage);
  }, [favoritesStorage]);

  return (
    <GS.PageContainer>
      <GS.ResponsiveContainer>
        <GS.PageTitle>
          {favoritesStorage?.length
            ? "Favorites"
            : "No media added to favorites"}
        </GS.PageTitle>

        <GS.FlexContainer>
          {favorites?.map((favorite, index) => (
            <GS.FlexItem
              lg={2}
              xs={12}
              margin='15px'
              key={`favoritePreview-${favorite?.id || index}`}
            >
              <Card.MediaPreview preview={favorite} showVoteAverage />
            </GS.FlexItem>
          ))}
        </GS.FlexContainer>
      </GS.ResponsiveContainer>
    </GS.PageContainer>
  );
};

export default FavoritesPage;
