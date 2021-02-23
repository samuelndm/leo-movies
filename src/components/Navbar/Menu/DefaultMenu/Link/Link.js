import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";
import * as C from "components";

const Link = ({ link }) => {
  if (!link) return null;
  return (
    <S.Container style={link?.style}>
      <C.UI.LinkHandler
        url={link.url}
        target={link.target}
        title={link.title}
      />
    </S.Container>
  );
};

Link.propTypes = {
  link: PropTypes.object.isRequired,
};

export default Link;
