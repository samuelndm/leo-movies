import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  @media screen and (min-width: 991px) {
    display: none;
  }
`;

export const Icon = styled.i`
  padding: 20px;
  font-size: 20px;
  color: #fff;
  background: transparent;
  border: none;
  border-radius: 50%;
  cursor: pointer;
`;

export const Menu = styled.div`
  z-index: 200;
  padding: 20px;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: var(--navbar-height);
  right: 0;
  transform: ${({ isVisible }) =>
    isVisible ? "translateX(0%)" : "translateX(200%)"};
  transition: transform 0.5s ease-in-out;
  background: var(--primary-gradient-color);
`;
