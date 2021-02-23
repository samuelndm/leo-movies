import styled from "styled-components";

export const Container = styled.div`
  width: ${({ width }) => width || "auto"};
  & a {
    all: unset;
    margin: ${({ margin }) => margin || "0"};
    padding: ${({ padding }) => padding || "0"};
    width: ${({ width }) => width || "auto"};
    height: ${({ height }) => height || "auto"};
    display: ${({ display }) => display || "flex"};
    align-items: center;
    justify-content: ${({ childrenPosition }) => {
      switch (childrenPosition) {
        case "left":
          return "flex-start";
        case "right":
          return "flex-end";
        default:
          return "center";
      }
    }};

    color: ${({ color }) => color || "#000"};
    font-size: ${({ fontSize }) => fontSize || "14px"};
    font-weight: ${({ fontWeight }) => fontWeight || "500"};
    cursor: pointer;

    &:hover {
      ${({ colorOnHover }) => colorOnHover && `color: ${colorOnHover}`};
    }
  }
`;

export const LinkAnchor = styled.a``;

export const Title = styled.p``;
