import React from "react";
import PropTypes from "prop-types";
import Skeleton from "@material-ui/lab/Skeleton";
import * as S from "./styles";

const Departament = ({ departament = null }) => {
  return (
    <S.Container>
      {departament !== null ? (
        departament || "*"
      ) : (
        <Skeleton className='skeleton' variant='text' animation='wave' />
      )}
    </S.Container>
  );
};

Departament.propTypes = {
  departament: PropTypes.string,
};

export default Departament;
