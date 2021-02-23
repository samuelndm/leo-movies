import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import * as UTIL from "utils";
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
      {UTIL.isExternalUrl(url) ? (
        <S.LinkAnchor href={url || "#"} target={target || "_self"}>
          {title && <S.Title>{title || ""}</S.Title>}
          {children}
        </S.LinkAnchor>
      ) : (
        <Link
          to={url || "#"}
          target={target || "_self"}
          onClick={(e) => {
            setHasClicked && setHasClicked(true);
          }}
        >
          {title && <S.Title>{title || ""}</S.Title>}
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
