import styled from "styled-components";

export const Container = styled.div`
  padding: 0 2px;
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  & .css-2b097c-container,
  & .css-yk16xz-control {
    width: 100%;
    border-radius: 18px;
    box-shadow: inset 1px 1px 3px 0 rgba(79, 82, 88, 0.34);
    border: none;
  }

  & .css-1wa3eu0-placeholder,
  & .css-1uccc91-singleValue {
    font-size: 13px;
  }

  @media screen and (max-width: 584px) {
    margin: 10px;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    & .css-2b097c-container,
    & .css-yk16xz-control {
      padding: 0 10px;
    }
  }
`;

export const Label = styled.h4`
  margin: 0 auto 10px;
  text-align: center;

  @media screen and (max-width: 584px) {
    margin: 0;
    font-size: 10px;
    line-height: 16px;
  }
`;
