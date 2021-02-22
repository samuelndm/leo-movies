import React from "react";
import PropTypes from "prop-types";
import { useCountdownTimer } from "hooks";
import * as S from "./styles";
import * as UI from "components/UIComponents";

const Overview = ({ overview = null }) => {
  const { countdown } = useCountdownTimer(9);

  if (countdown === 0 && overview === null) overview = "";
  return overview !== null ? (
    <S.Container>
      <S.Title>Overview</S.Title>
      <S.Content>{overview || "*"}</S.Content>
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
