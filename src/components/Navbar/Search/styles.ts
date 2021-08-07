import styled from "styled-components";

export const Form = styled.form`
  flex-grow: 1;
  width: 100%;
  max-width: ${({ isVisible }) => (isVisible ? "1000px" : "0")};
  padding: 20px;
  margin: 0 0 0 auto;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 800ms ease;

  @media screen and (max-width: 991px) {
    flex-grow: 1;
    width: 100%;
    max-width: 100%;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: ${({ isVisible }) => (isVisible ? "10px" : "0")};
  max-width: ${({ isVisible }) => (isVisible ? "1000px" : "0")};
  border-radius: 18px;
  box-shadow: inset 1px 1px 3px 0 rgba(79, 82, 88, 0.34);
  transition: all 800ms ease;

  @media screen and (max-width: 991px) {
    padding: 10px;
    max-width: 100%;
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

  @media screen and (max-width: 991px) {
    color: #333;
  }
`;
