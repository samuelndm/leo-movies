import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useCountdownTimer } from "hooks";
import * as S from "./styles";
import * as UI from "components/UIComponents";

const Biography = ({ biography = null }) => {
  const { countdown } = useCountdownTimer(9);
  const [paragraphs, setParagraphs] = useState([]);

  useEffect(() => {
    const paragraphs = biography?.match(/[^\r\n]+/g) || [];
    setParagraphs(paragraphs);
  }, [biography]);

  if (countdown === 0 && biography === null) biography = "";
  return biography !== null ? (
    <S.Container>
      <S.Title>Biography</S.Title>
      <S.Content>{paragraphs[0] || "*"}</S.Content>
      {/* <S.Content>{paragraphs[1] || ""}</S.Content> */}
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
        count={4}
        SkeletonStyle={S.SkeletonTextStyle}
      />
    </>
  );
};

Biography.propTypes = {
  biography: PropTypes.string,
};

export default Biography;
