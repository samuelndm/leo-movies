import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";
import * as UI from "../../../../UIComponents";

const Link = ({ link, setHasClicked }) => {
  if (!link) return null;
  return (
    <S.Container>
      <UI.LinkHandler
        url={link.url}
        target={link.target}
        title={link.title}
        childrenPosition='left'
        setHasClicked={setHasClicked}
      />
    </S.Container>
  );
};

Link.propTypes = {
  link: PropTypes.object.isRequired,
  setHasClicked: PropTypes.func.isRequired,
};

export default Link;
