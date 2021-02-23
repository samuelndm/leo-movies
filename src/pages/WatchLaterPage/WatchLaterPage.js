import React, { useEffect, useState } from "react";
import { useWatchLaterContext } from "contexts";
import * as API from "services/Loaders";
import * as UTIl from "utils";
import * as S from "./styles";
import * as C from "components";

const WatchLaterPage = () => {
  const { watchLaterStorage } = useWatchLaterContext();
  const [watchLaterList, setWatchLaterList] = useState([]);

  const loadData = async (watchLaterStorage) => {
    watchLaterStorage?.forEach(async (watchLater) => {
      const watchLaterType = watchLater?.media_type;
      let response = {};

      switch (watchLaterType) {
        case UTIl.Contants.MEDIA_TYPES.MOVIE:
          response = await API.loadMovieById(watchLater?.id);
          break;
        case UTIl.Contants.MEDIA_TYPES.TV_SHOW:
          response = await API.loadTvShowById(watchLater?.id);
          break;

        default:
          break;
      }

      setWatchLaterList((prev) => [
        ...prev,
        { ...response, media_type: watchLaterType },
      ]);
    });
  };

  useEffect(() => {
    return loadData(watchLaterStorage);
  }, [watchLaterStorage]);

  return (
    <S.Container>
      <S.Content>
        <S.Title>
          {watchLaterStorage?.length
            ? "Watch Later"
            : "No media added to watch later"}
        </S.Title>

        <S.FlexContainer>
          {watchLaterList?.map((watchLater, index) => (
            <S.FlexItem
              lg={2}
              xs={12}
              margin='15px'
              key={`watchLaterPreview-${watchLater?.id || index}`}
            >
              <C.Card.MediaPreview preview={watchLater} showVoteAverage />
            </S.FlexItem>
          ))}
        </S.FlexContainer>
      </S.Content>
    </S.Container>
  );
};

export default WatchLaterPage;
