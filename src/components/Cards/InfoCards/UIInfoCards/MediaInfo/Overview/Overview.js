import React from "react";
import PropTypes from "prop-types";
import Skeleton from "@material-ui/lab/Skeleton";
import * as S from "./styles";

const Overview = ({ overview = null }) => {
  return (
    <S.Container>
      {overview !== null ? (
        <>
          <S.Title>Overview</S.Title>
          <S.Content>{overview || ""}</S.Content>
        </>
      ) : (
        <>
          <Skeleton className='skeleton-1' variant='text' animation='wave' />
          <Skeleton className='skeleton-2' variant='text' animation='wave' />
          <Skeleton className='skeleton-3' variant='text' animation='wave' />
        </>
      )}
    </S.Container>
  );
};

Overview.propTypes = {
  overview: PropTypes.string,
};

export default Overview;
