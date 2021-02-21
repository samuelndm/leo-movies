import React from "react";
import PropTypes from "prop-types";
import Skeleton from "@material-ui/lab/Skeleton";
import * as S from "./styles";

const Title = ({ title = null }) => {
  return (
    <S.Container>
      {title !== null ? (
        title || "*"
      ) : (
        <Skeleton className='skeleton' variant='text' animation='wave' />
      )}
    </S.Container>
  );
};

Title.propTypes = {
  title: PropTypes.string,
};

export default Title;
