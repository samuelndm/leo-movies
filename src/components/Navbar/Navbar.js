import React from "react";
import * as S from "./styles";
import Logo from "./Logo/Logo";
import Search from "./Search/Search";
import Menu from "./Menu/Menu";

const Navbar = () => {
  return (
    <S.Container>
      <S.Content>
        <Logo />
        <Menu />
        <Search />
      </S.Content>
    </S.Container>
  );
};

export default Navbar;
