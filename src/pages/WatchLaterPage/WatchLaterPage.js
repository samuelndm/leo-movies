import React, { useEffect, useState } from "react";
import { useWatchLaterContext } from "contexts";
import { MEDIA_TYPES } from "utils/constants";
import * as API from "services/Loaders";
import * as GS from "assets/styles/GlobalStyles";
import * as Card from "components/Cards";

const WatchLaterPage = () => {
  const { watchLaterStorage } = useWatchLaterContext();
  const [watchLaterList, setWatchLaterList] = useState([]);

  const loadData = async (watchLaterStorage) => {
    watchLaterStorage?.forEach(async (watchLater) => {
      const watchLaterType = watchLater?.media_type;
      let response = {};

      if (watchLaterType === MEDIA_TYPES.MOVIE) {
        response = await API.loadMovieById(watchLater?.id);
      } else if (watchLaterType === MEDIA_TYPES.TV_SHOW) {
        response = await API.loadTvShowById(watchLater?.id);
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
    <GS.PageContainer>
      <GS.ResponsiveContainer>
        <GS.PageTitle>
          {watchLaterStorage?.length
            ? "Watch Later"
            : "No media added to watch later"}
        </GS.PageTitle>

        <GS.FlexContainer>
          {watchLaterList?.map((watchLater, index) => (
            <GS.FlexItem
              lg={2}
              xs={12}
              margin='15px'
              key={`watchLaterPreview-${watchLater?.id || index}`}
            >
              <Card.MediaPreview preview={watchLater} showVoteAverage />
            </GS.FlexItem>
          ))}
        </GS.FlexContainer>
      </GS.ResponsiveContainer>
    </GS.PageContainer>
  );
};

export default WatchLaterPage;
