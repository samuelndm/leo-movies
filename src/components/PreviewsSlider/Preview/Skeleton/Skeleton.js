import React from "react";
import SkeletonUI from "@material-ui/lab/Skeleton";
import * as S from "./styles";

const Skeleton = () => {
  return (
    <S.Container>
      <SkeletonUI className='body' variant='rect' animation='wave' />
    </S.Container>
  );
};

export default Skeleton;
