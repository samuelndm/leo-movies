import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import * as S from "./styles";
import Link from "./Link/Link";

const MobileMenu = ({ menu }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasClicked, setHasClicked] = useState(false);

  useEffect(() => {
    if (hasClicked) {
      setHasClicked(false);
      setIsVisible(false);
    }
  }, [hasClicked]);

  if (!menu || !menu.length) return null;
  return (
    <S.Container>
      <S.Icon
        className='fas fa-bars'
        onClick={(e) => setIsVisible((prev) => !prev)}
      />

      <S.Menu isVisible={isVisible}>
        {menu.map((link, index) => (
          <Link
            link={link}
            setIsVisible={setIsVisible}
            setHasClicked={setHasClicked}
            key={`mobilemenu-${index}`}
          />
        ))}
      </S.Menu>
    </S.Container>
  );
};

MobileMenu.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MobileMenu;
