import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";
import * as C from "components";

const TvShowsList = ({ tvShows }) => {
  return (
    <S.Container>
      <S.FlexContainer>
        {tvShows?.map((tvShow, index) => (
          <S.FlexItem
            lg={2}
            xs={12}
            margin='15px'
            key={`tvShowPreview-${tvShow?.id || index}`}
          >
            <C.Card.TvShowPreview preview={tvShow} showVoteAverage />
          </S.FlexItem>
        ))}
      </S.FlexContainer>
    </S.Container>
  );
};

TvShowsList.propTypes = {
  tvShows: PropTypes.array,
};

export default TvShowsList;
