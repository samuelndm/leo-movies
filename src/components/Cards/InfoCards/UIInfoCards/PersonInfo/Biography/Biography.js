import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Skeleton from "@material-ui/lab/Skeleton";
import * as S from "./styles";

const Biography = ({ biography = null }) => {
  const [paragraphs, setParagraphs] = useState([]);

  useEffect(() => {
    const paragraphs = biography?.match(/[^\r\n]+/g) || [];
    setParagraphs(paragraphs);
  }, [biography]);

  return (
    <S.Container>
      {biography !== null ? (
        <>
          <S.Title>Biography</S.Title>
          <S.Content>{paragraphs[0] || ""}</S.Content>
          {/* <S.Content>{paragraphs[1] || ""}</S.Content> */}
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

Biography.propTypes = {
  biography: PropTypes.string,
};

export default Biography;
