import styled from "styled-components";

export const Container = styled.div`
  margin: 15px 0 0 5px;
  color: #fff;

  & > * {
    margin: 10px 0;
  }

  @media screen and (max-width: 991px) {
    text-align: center;
  }
`;

export const Title = styled.h3``;

export const Content = styled.p`
  font-size: 14px;
  text-align: left;

  @media screen and (max-width: 991px) {
    font-size: 13px;
    text-align: center;
  }
`;

export const ReadMore = styled.span`
  cursor: pointer;
  font-weight: 800;
`;

export const ModalContainer = styled(Container)`
  padding: 15px 20px;
  max-height: 450px;
  overflow-y: auto;
  border-radius: 6px;
  background: var(--gradient-primary-color, #333);
  color: #fff;
`;

export const SkeletonTitleStyle = styled.div`
  margin: 20px 0 0;
  width: 200px;
  height: 30px;
  border-radius: 6px;
`;

export const SkeletonTextStyle = styled.div`
  margin: 10px 0 0;
  width: 100%;
  height: 20px;
  border-radius: 6px;
`;
