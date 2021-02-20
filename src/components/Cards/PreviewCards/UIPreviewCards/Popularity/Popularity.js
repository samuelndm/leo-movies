import React from "react";
import PropTypes from "prop-types";
import Skeleton from "@material-ui/lab/Skeleton";
import * as S from "./styles";

const Popularity = ({ popularity = null }) => {
  return (
    <S.Container popularity={popularity}>
      {popularity !== null ? (
        popularity?.toFixed(1) || "NR"
      ) : (
        <Skeleton className='skeleton-body' variant='circle' animation='wave' />
      )}
    </S.Container>
  );
};

Popularity.propTypes = {
  popularity: PropTypes.number,
};

export default Popularity;
