import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";
import * as Card from "components/Cards";

const TvShowsList = ({ tvShows }) => {
  return (
    <S.Container>
      <S.Movies>
        {tvShows.map((tvShow) => (
          <Card.PreviewTvShow
            preview={tvShow}
            key={`previewTvShow-${tvShow.id}`}
          />
        ))}
      </S.Movies>
    </S.Container>
  );
};

TvShowsList.propTypes = {
  tvShows: PropTypes.array,
};

export default TvShowsList;
