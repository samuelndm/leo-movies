import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { isExternalUrl } from "../../../utils/utils";
import * as S from "./styles";

const LinkHandler = ({
  url,
  target,
  title,
  children,
  childrenPosition,
  color,
  colorOnHover,
  margin,
  padding,
  width,
  height,
  setHasClicked,
}) => {
  const [urlLink] = useState(url || "#");
  const [targetLink] = useState(target || "_self");
  const [titleLink] = useState(title || "");

  return (
    <S.Container
      childrenPosition={childrenPosition}
      color={color}
      colorOnHover={colorOnHover}
      margin={margin}
      padding={padding}
      width={width}
      height={height}
    >
      {isExternalUrl(url) ? (
        <S.LinkAnchor href={urlLink} target={targetLink}>
          {titleLink && <S.Title>{titleLink}</S.Title>}
          {children}
        </S.LinkAnchor>
      ) : (
        <Link
          to={urlLink}
          target={targetLink}
          onClick={(e) => {
            setHasClicked && setHasClicked(true);
          }}
        >
          {titleLink && <S.Title>{titleLink}</S.Title>}
          {children}
        </Link>
      )}
    </S.Container>
  );
};

LinkHandler.propTypes = {
  url: PropTypes.string,
  target: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.element,
  childrenPosition: PropTypes.string,
  color: PropTypes.string,
  colorOnHover: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  setHasClicked: PropTypes.func,
};

export default LinkHandler;
