import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";
import Link from "./Link/Link";

const DefaultMenu = ({ menu }) => {
  if (!menu || !menu.length) return null;
  return (
    <S.Container>
      {menu.map((link) => (
        <Link link={link} key={`link-${link.id}`} />
      ))}
    </S.Container>
  );
};

DefaultMenu.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DefaultMenu;
