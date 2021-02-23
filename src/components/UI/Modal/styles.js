import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  z-index: 99999;
  padding: 0 15px;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 586px) {
    padding: 0;
    height: 100vh;
  }
`;

export const ContentOpenAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(100%);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ContentClosingAnimation = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }

  to {
    opacity: 0;
    transform: translateY(100%);
  }
`;

export const Content = styled.div`
  z-index: 99999;
  margin: auto;
  padding: 15px;
  position: relative;
  border-radius: 6px;
  background-color: transparent;
  animation: ${({ isOpen }) =>
    isOpen ? ContentOpenAnimation : ContentClosingAnimation}
    0.5s ease-in-out;

  width: ${({ size }) => {
    switch (size) {
      case "lg":
        return "800px";
      case "md":
        return "600px";
      case "sm":
        return "400px";

      default:
        return "auto";
    }
  }};


  @media (min-width: 480px) {
    max-width: 728px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }
}
  `;

export const CloseButton = styled.button`
  z-index: 999999;
  margin: 0 5px 0 30px;
  width: 38px;
  height: 38px;
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
  border: 2px solid #8f9bb3;
  border-radius: 1000px;
  background: #f7f9fc;
`;

export const CloseIcon = styled.i`
  color: #2e3a59;
  font-size: 24px;
  font-weight: 300p;
`;

export const Background = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(51, 51, 51, 0.92);
`;
