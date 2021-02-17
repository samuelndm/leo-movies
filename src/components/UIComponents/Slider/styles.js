import styled from "styled-components";

export const SliderStyle = { width: "100%", maxWidth: "100%" };

const DefaultArrowStyle = styled.button`
  z-index: 2;
  width: 40px;
  height: 40px;
  background-color: #e5e3e3;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover,
  &:active {
    background-color: #cdcbcb;
  }

  &:before {
    content: "";
    color: var(--primary-color, #333);
    font-size: 30px;
    font-family: "Font Awesome 5 Free";
    font-weight: 700;
    text-align: center;
  }
`;

export const DefaultPrevArrow = styled(DefaultArrowStyle)`
  left: -3%;

  &:before {
    content: "\f104";
  }

  @media screen and (max-width: 768px) {
    left: -1%;
  }

  @media screen and (max-width: 575px) {
    left: -2%;
  }
`;

export const DefaultNextArrow = styled(DefaultArrowStyle)`
  right: -3%;

  &:before {
    content: "\f105";
  }

  @media screen and (max-width: 768px) {
    right: -1%;
  }

  @media screen and (max-width: 575px) {
    right: -2%;
  }
`;

export const Dots = styled.ul`
  z-index: 2;
  top: 105%;
  list-style-type: none;

  & li {
    margin: 0 2.5px;
  }

  & li > button {
    width: 48px;
    height: 48px;
  }

  & li button:before {
    color: var(--primary-color, #000);
    width: 100%;
    height: 100%;
    font-size: 13px;
  }

  & li.slick-active button:before {
    opacity: 1;
    color: var(--secondary-color, #00368a);
    font-size: 13px;
    width: 100%;
    height: 100%;
  }
`;
