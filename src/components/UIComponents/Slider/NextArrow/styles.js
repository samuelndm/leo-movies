import styled from "styled-components";
import * as SliderStyles from "../styles";

export const DefaultNextArrow = styled(SliderStyles.DefaultArrowStyle)`
  right: -3%;

  &:before {
    content: "\f105";
  }

  @media screen and (max-width: 768px) {
    right: -1%;
  }

  @media screen and (max-width: 586px) {
    right: 0;
  }
`;
