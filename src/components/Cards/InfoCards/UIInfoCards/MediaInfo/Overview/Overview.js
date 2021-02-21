import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";
import * as UI from "components/UIComponents";

const Overview = ({ overview = null }) => {
  return overview !== null ? (
    <S.Container>
      <S.Title>Overview</S.Title>
      <S.Content>{overview || ""}</S.Content>
    </S.Container>
  ) : (
    <>
      <UI.Skeleton
        variant='text'
        animation='wave'
        SkeletonStyle={S.SkeletonTitleStyle}
      />

      <UI.Skeleton
        variant='text'
        animation='wave'
        count={3}
        SkeletonStyle={S.SkeletonTextStyle}
      />
    </>
  );
};

Overview.propTypes = {
  overview: PropTypes.string,
};

export default Overview;
