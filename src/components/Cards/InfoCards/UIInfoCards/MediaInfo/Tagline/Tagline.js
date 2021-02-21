import React from "react";
import PropTypes from "prop-types";
import Skeleton from "@material-ui/lab/Skeleton";
import * as S from "./styles";

const Tagline = ({ tagline = null }) => {
  return (
    <S.Container>
      {tagline !== null ? (
        tagline || ""
      ) : (
        <Skeleton className='skeleton' variant='text' animation='wave' />
      )}
    </S.Container>
  );
};

Tagline.propTypes = {
  tagline: PropTypes.string,
};

export default Tagline;
