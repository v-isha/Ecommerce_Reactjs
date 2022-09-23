import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (min-width:280px) and (max-width: 480px) {
      ${props}
    }
  `;
};
