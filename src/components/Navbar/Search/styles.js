import styled from "styled-components";

export const Form = styled.form`
  flex-grow: ${({ isVisible }) => (isVisible ? "1" : "0")};
  width: ${({ isVisible }) => (isVisible ? "auto" : "0")};
  margin: 0 0 0 auto;
  padding: 20px;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 500ms ease;

  @media screen and (max-width: 975px) {
    width: 100%;
    flex-grow: 1;
    width: 100%;
  }
`;

export const Input = styled.input`
  padding: ${({ isVisible }) => (isVisible ? "10px" : "0")};
  width: ${({ isVisible }) => (isVisible ? "100%" : "0")};
  border-radius: 18px;
  box-shadow: inset 1px 1px 3px 0 rgba(79, 82, 88, 0.34);
  transition: max-width 500ms ease;

  @media screen and (max-width: 975px) {
    padding: 10px;
    width: 100%;
  }

  &::-webkit-search-cancel-button {
    position: relative;
    right: 40px;
  }
`;

export const Button = styled.button`
  padding: 10px;
  position: absolute;
  right: 25px;
  background-color: transparent;
  cursor: pointer;
`;

export const Icon = styled.i`
  color: ${({ isVisible }) => (isVisible ? "#333" : "#fff")};
  font-size: 18px;

  @media screen and (max-width: 975px) {
    color: #333;
  }
`;
