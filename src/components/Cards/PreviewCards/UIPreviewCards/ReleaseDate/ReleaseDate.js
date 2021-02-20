import React from "react";
import PropTypes from "prop-types";
import Skeleton from "@material-ui/lab/Skeleton";
import * as S from "./styles";

const ReleaseDate = ({ releaseDate = null }) => {
  return (
    <S.Container>
      {releaseDate !== null ? (
        releaseDate || "*"
      ) : (
        <Skeleton className='skeleton-body' variant='text' animation='wave' />
      )}
    </S.Container>
  );
};

ReleaseDate.propTypes = {
  releaseDate: PropTypes.string,
};

export default ReleaseDate;
