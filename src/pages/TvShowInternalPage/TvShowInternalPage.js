import React, { useEffect, useState } from "react";
import * as API from "services/middleware";
import * as S from "./styles";
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
    <S.Container>
      <C.TvShowInfo tvShow={tvShow} />
      <C.TvShowCredits credits={credits} />
    </S.Container>
  );
};

export default TvShowInternalPage;
