import styled from "styled-components";

export const SliderStyle = { width: "100%", maxWidth: "100%" };

export const DefaultPrevArrow = styled.div`
  z-index: 2;
  padding: 10px;
  width: 50px;
  height: 50px;
  position: absolute;
  top: 50%;
  left: -5%;
  text-align: center;

  &:before {
    color: var(--primary-color);
    font-size: 30px;
    font-family: "Font Awesome 5 Free";
    font-weight: 600;
    content: "\f104";
    opacity: 1;
  }

  @media screen and (max-width: 1050px) {
    left: -1%;
  }

  @media screen and (max-width: 575px) {
    left: -5%;
  }
`;

export const DefaultNextArrow = styled.div`
  z-index: 2;
  padding: 10px;
  width: 50px;
  height: 50px;
  position: absolute;
  top: 50%;
  right: -5%;
  text-align: center;

  &:before {
    color: var(--primary-color);
    font-size: 30px;
    font-family: "Font Awesome 5 Free";
    font-weight: 700;
    content: "\f105";
    opacity: 1;
  }

  @media screen and (max-width: 1050px) {
    right: -1%;
  }

  @media screen and (max-width: 575px) {
    right: -5%;
  }
`;

export const Dots = styled.ul`
  z-index: 2;
  top: 100%;
  list-style-type: none;

  & li {
    margin: 0 1px;
  }

  & li button:before {
    color: #ffffff;
    color: var(--blue-color);
    color: var(--current-type-color);
    font-size: 13px;
  }

  & li.slick-active button:before {
    opacity: 1;
    color: var(--current-type-color);
    font-size: 13px;
  }

  @media screen and (max-width: 768px) {
    top: 98%;
  }
`;
