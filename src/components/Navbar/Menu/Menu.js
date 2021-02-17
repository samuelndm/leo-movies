import React from "react";
import * as S from "./styles";
import DefaultMenu from "./DefaultMenu/DefaultMenu";
import MobileMenu from "./MobileMenu/MobileMenu";

const menu = [
  { url: "/", title: "Home" },
  { url: "/movies", title: "Movies" },
  { url: "/tv", title: "TV Shows" },
  { url: "/persons", title: "Persons" },
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
