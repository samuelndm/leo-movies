import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  & .css-2b097c-container,
  & .css-yk16xz-control,
  * .css-1pahdxg-control {
    width: 7rem;
    height: 2.8rem;
    min-height: 2.8rem;
    border-radius: 2.52rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & .css-yk16xz-control {
    border: none;
    border: 0.09rem solid #e8e8e8;
  }

  & .css-1wa3eu0-placeholder,
  & .css-1uccc91-singleValue {
    font-size: 1.2rem;
    color: #808080;
  }

  & .css-tlfecz-indicatorContainer,
  & .css-1gtu0rj-indicatorContainer {
    padding: 0 0.3rem 0 0;
  }

  & @media screen and (max-width: 584px) {
    margin: 1rem;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    & .css-2b097c-container,
    & .css-yk16xz-control {
      padding: 0 1rem;
    }
  }
`

export const Label = styled.span`
  margin: 0 auto 1rem;
  text-align: center;

  @media screen and (max-width: 584px) {
    margin: 0;
    font-size: 1rem !important;
    line-height: 1.6rem;
  }
`
