import React from "react";
import * as S from "./styles";
import { menu } from "./MenuSettings";
import DefaultMenu from "./DefaultMenu/DefaultMenu";
import MobileMenu from "./MobileMenu/MobileMenu";

const Menu = () => {
  return (
    <S.Container>
      <DefaultMenu menu={menu} />
      <MobileMenu menu={menu} />
    </S.Container>
  );
};

export default Menu;
