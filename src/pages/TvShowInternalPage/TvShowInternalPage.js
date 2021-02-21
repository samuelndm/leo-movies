import React, { useEffect, useState } from "react";
import * as API from "services/Loaders";
import * as GS from "assets/styles/GlobalStyles";
import * as C from "components";

const TvShowInternalPage = ({ match }) => {
  const [tvShowId] = useState(match?.params?.id);
  const [tvShow, setTvShow] = useState(null);
  const [credits, setCredits] = useState(null);

  const loadData = async (tvShowId) => {
    const allResponses = await Promise.all([
      API.loadTvShowById(tvShowId),
      API.loadTvShowVideosById(tvShowId),
      API.loadTvShowCreditsById(tvShowId),
    ]);

    const tvShow = allResponses[0];
    const videos = allResponses[1];
    const credits = allResponses[2];

    setTvShow({ ...tvShow, videos });
    setCredits(credits);
  };
  useEffect(() => {
    return loadData(tvShowId);
  }, [tvShowId]);

  return (
    <GS.PageContainer>
      <C.TvShowInfo tvShow={tvShow} />
      <C.TvShowCredits credits={credits} />
    </GS.PageContainer>
  );
};

export default TvShowInternalPage;
