import styled from "styled-components";
import * as SliderStyles from "../styles";

export const DefaultPrevArrow = styled(SliderStyles.DefaultArrowStyle)`
  left: -3%;

  &:before {
    content: "\f104";
  }

  @media screen and (max-width: 768px) {
    left: -1%;
  }

  @media screen and (max-width: 586px) {
    left: 0;
  }
`;
