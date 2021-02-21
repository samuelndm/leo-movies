import React from "react";
import PropTypes from "prop-types";
import Skeleton from "@material-ui/lab/Skeleton";
import * as S from "./styles";
import * as Action from "./index";

const Actions = ({ content = null }) => {
  return (
    <S.Container>
      {content !== null ? (
        <>
          <Action.WatchTrailer trailerKey={content?.videos?.[0]?.key} />
          <Action.Favorite contentId={content?.id} />
          <Action.WatchLater contentId={content?.id} />
        </>
      ) : (
        <>
          <Skeleton className='skeleton-rect' variant='rect' animation='wave' />
          <Skeleton
            className='skeleton-circle'
            variant='circle'
            animation='wave'
          />
          <Skeleton
            className='skeleton-circle'
            variant='circle'
            animation='wave'
          />
        </>
      )}
    </S.Container>
  );
};

Actions.propTypes = {
  content: PropTypes.object,
};

export default Actions;
