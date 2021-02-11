import React from "react";
import * as S from "./styles";
import DefaultMenu from "./DefaultMenu/DefaultMenu";
import MobileMenu from "./MobileMenu/MobileMenu";

const menu = [
  { id: 1, url: "/", title: "Home" },
  { id: 2, url: "/movies", title: "Movies" },
  { id: 3, url: "/tv", title: "TV Shows" },
];

const Menu = () => {
  return (
    <S.Container>
      <DefaultMenu menu={menu} />
      <MobileMenu menu={menu} />
    </S.Container>
  );
};

export default Menu;
