import React from "react";
import PropTypes from "prop-types";
import Skeleton from "@material-ui/lab/Skeleton";
import * as S from "./styles";
import * as HeaderC from "./index";

const Header = ({ content = null }) => {
  return (
    <S.Container>
      {content !== null ? (
        <>
          <S.Content>
            <HeaderC.Title title={content?.title || content?.name} />
            <HeaderC.VoteAverage voteAverage={content?.vote_average} />
          </S.Content>

          <S.Content>
            <HeaderC.ReleaseDate
              releaseDate={content?.release_date || content?.first_air_date}
            />
            <S.Separator />
            <HeaderC.Genres genres={content?.genres} />
            <S.Separator />
            <HeaderC.Duration
              duration={content?.runtime || content?.episode_run_time?.[0]}
            />
          </S.Content>
        </>
      ) : (
        <>
          <Skeleton className='skeleton' variant='text' animation='wave' />
          <Skeleton className='skeleton' variant='text' animation='wave' />
        </>
      )}
    </S.Container>
  );
};

Header.propTypes = {
  content: PropTypes.object,
};

export default Header;
