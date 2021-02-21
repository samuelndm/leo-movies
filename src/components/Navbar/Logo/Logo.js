import React from "react";
import * as S from "./styles";
import * as UI from "components/UIComponents";
import logo from "assets/images/logo.png";

const Logo = () => {
  return (
    <S.Container>
      <UI.LinkHandler url='/'>
        <S.Image src={logo} alt="website's logo" loading='lazy' />
      </UI.LinkHandler>
    </S.Container>
  );
};

export default Logo;