import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useCountdownTimer } from "hooks";
import * as UTIL from "utils/utils";
import * as S from "./styles";
import * as UI from "components/UIComponents";

const Biography = ({ biography }) => {
  const { countdown } = useCountdownTimer();
  const [paragraphs, setParagraphs] = useState([]);
  const [showAllBiography, setShowAllBiography] = useState(false);

  useEffect(() => {
    const paragraphs = UTIL.splitParagraphs(biography);
    setParagraphs(paragraphs);
  }, [biography]);

  return biography || countdown === 0 ? (
    <>
      <S.Container>
        <S.Title>Biography</S.Title>
        <S.Content>
          {paragraphs?.[0] || "*"}
          {paragraphs?.length > 1 && (
            <S.ReadMore onClick={(e) => setShowAllBiography(true)}>
              {" Read more..."}
            </S.ReadMore>
          )}
        </S.Content>
      </S.Container>

      <UI.Modal
        openModal={showAllBiography}
        closeModal={setShowAllBiography}
        size='lg'
      >
        <S.ModalContainer>
          <S.Title>Biography</S.Title>
          {paragraphs.map((paragraph, index) => (
            <S.Content key={`paragraph-${index}`}>{paragraph || "*"}</S.Content>
          ))}
        </S.ModalContainer>
      </UI.Modal>
    </>
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
