import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";
import * as GS from "assets/styles/GlobalStyles";
import * as Card from "components/Cards";

const TvShowsList = ({ tvShows }) => {
  return (
    <S.Container>
      <GS.FlexContainer>
        {tvShows.map((tvShow) => (
          <GS.FlexItem lg={2} xs={12} key={`previewTvShow-${tvShow.id}`}>
            <Card.PreviewTvShow preview={tvShow} />
          </GS.FlexItem>
        ))}
      </GS.FlexContainer>
    </S.Container>
  );
};

TvShowsList.propTypes = {
  tvShows: PropTypes.array,
};

export default TvShowsList;
