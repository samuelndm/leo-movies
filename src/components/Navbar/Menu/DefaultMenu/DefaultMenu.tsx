import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";
import Link from "./Link/Link";

const DefaultMenu = ({ menu }) => {
  if (!menu || !menu.length) return null;
  return (
    <S.Container>
      {menu.map((link, index) => (
        <Link link={link} key={`defaultMenu-${index}`} />
      ))}
    </S.Container>
  );
};

DefaultMenu.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DefaultMenu;
