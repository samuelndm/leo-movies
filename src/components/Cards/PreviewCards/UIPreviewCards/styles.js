import styled from "styled-components";

export const Container = styled.div`
  margin: 15px auto;
  width: 150px;
  height: 320px;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  border-radius: 6px;
  cursor: pointer;

  & > .skeleton-body {
    width: 150px;
    height: 225px;
    border-radius: inherit;
  }

  @media screen and (max-width: 575px) {
    margin: 15px auto 0;
    width: 225px;
    height: 440px;
    align-items: center;

    & > .skeleton-body {
      width: 225px;
      height: 337.5px;
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 225px;
  border-radius: 6px;

  @media screen and (max-width: 575px) {
    height: 337.5px;
  }
`;

export const Popularity = styled.span`
  width: 45px;
  height: 45px;
  position: absolute;
  top: 62.5%;
  left: -10px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--primary-color, #333);
  border-radius: 50%;
  border: 3px solid
    ${({ popularity }) => {
      if (!popularity) {
        return "#7b7b7b";
      } else if (popularity >= 7) {
        return "#2eba72";
      } else if (popularity >= 5) {
        return "#FFEE44";
      } else {
        return "#bf0000";
      }
    }};

  color: #fff;
  font-weight: 700;

  @media screen and (max-width: 575px) {
    top: 70%;
  }
`;

export const Title = styled.h2`
  margin: 30px 0 0;
  color: #000;
  font-size: 14px;
  font-weight: 700;
  text-align: left;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  @media screen and (max-width: 575px) {
    text-align: center;
  }
`;

export const ReleaseDate = styled.span`
  color: rgba(0, 0, 0, 0.6);
  font-size: 14px;
  text-align: left;

  @media screen and (max-width: 575px) {
    text-align: center;
  }
`;
