import styled from "styled-components";

export const Form = styled.form`
  flex-grow: 1;
  margin: ${({ margin }) => margin || "0 10px 0 0"};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 975px) {
    max-width: 100%;
  }
`;

export const Label = styled.label``;

export const Input = styled.input`
  padding: 10px;
  width: 100%;
  border-radius: 18px;
  box-shadow: inset 1px 1px 3px 0 rgba(79, 82, 88, 0.34);

  @media screen and (max-width: 975px) {
    padding: 10px;
  }

  &::-webkit-search-cancel-button {
    position: relative;
    right: 60px;
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
  color: #333;
  font-size: 18px;
`;
