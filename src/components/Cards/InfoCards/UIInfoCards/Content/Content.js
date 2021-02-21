import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";
import * as UIContent from "./index";

const Content = ({ content }) => {
  return (
    <S.Container>
      <UIContent.Header content={content} />
      <UIContent.Tagline tagline={content?.tagline} />
      <UIContent.Overview overview={content?.overview} />
      <UIContent.Actions content={content} />
    </S.Container>
  );
};

Content.propTypes = {
  content: PropTypes.object,
};

export default Content;
