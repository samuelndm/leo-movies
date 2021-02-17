import React, { useEffect, useState } from "react";
import * as API from "services/Loaders";
import * as GS from "assets/styles/GlobalStyles";
import * as C from "components";

const TvShowDetailsPage = ({ match }) => {
  const [tvShowId] = useState(match?.params?.id);
  const [tvShow, setTvShow] = useState({});

  const loadData = async (tvShowId) => {
    const tvShow = await API.loadTvShowDetailsById(tvShowId);
    setTvShow(tvShow);
  };

  useEffect(() => {
    loadData(tvShowId);
  }, [tvShowId]);

  return (
    <GS.PageContainer>
      <C.TvShowDetails tvShow={tvShow} />
    </GS.PageContainer>
  );
};

export default TvShowDetailsPage;
