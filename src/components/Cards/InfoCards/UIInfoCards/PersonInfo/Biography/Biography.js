import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useCountdownTimer } from "hooks";
import * as UTIL from "utils/utils";
import * as S from "./styles";
import * as UI from "components/UIComponents";

const Biography = ({ biography }) => {
  const { countdown } = useCountdownTimer();
  const [paragraphs, setParagraphs] = useState([]);

  useEffect(() => {
    const paragraphs = UTIL.splitParagraphs(biography);
    setParagraphs(paragraphs);
  }, [biography]);

  return biography || countdown === 0 ? (
    <S.Container>
      <S.Title>Biography</S.Title>
      <S.Content>{paragraphs[0] || "*"}</S.Content>
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
