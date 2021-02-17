import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";
import * as UI from "components/UIComponents";

const Link = ({ link }) => {
  if (!link) return null;
  return (
    <S.Container>
      <UI.LinkHandler url={link.url} target={link.target} title={link.title} />
    </S.Container>
  );
};

Link.propTypes = {
  link: PropTypes.object.isRequired,
};

export default Link;
