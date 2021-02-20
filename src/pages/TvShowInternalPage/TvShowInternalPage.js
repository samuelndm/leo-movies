import React, { useEffect, useState } from "react";
import * as API from "services/Loaders";
import * as GS from "assets/styles/GlobalStyles";
import * as C from "components";

const TvShowInternalPage = ({ match }) => {
  const [tvShowId] = useState(match?.params?.id);
  const [tvShow, setTvShow] = useState(null);
  const [credits, setCredits] = useState({});

  const loadData = async (tvShowId) => {
    const tvShow = await API.loadTvShowDetailsById(tvShowId);
    const credits = await API.loadTvShowCreditsById(tvShowId);

    setTvShow(tvShow);
    setCredits(credits);
  };
  useEffect(() => {
    return loadData(tvShowId);
  }, [tvShowId]);

  return (
    <GS.PageContainer>
      <C.TvShowDetails tvShow={tvShow} />
      <C.TvShowCredits credits={credits} />
    </GS.PageContainer>
  );
};

export default TvShowInternalPage;
