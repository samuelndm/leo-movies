import React from "react";
import logo from "assets/images/logo.png";
import * as S from "./styles";
import * as C from "components";

const Logo = () => {
  return (
    <S.Container>
      <C.UI.LinkHandler url='/'>
        <S.Image src={logo} alt="website's logo" loading='lazy' />
      </C.UI.LinkHandler>
    </S.Container>
  );
};

export default Logo;
