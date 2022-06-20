import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

export const mainStyle = {
  color: "salmon",
  fontSize: "50px",
};

export const GlobalStyeld = createGlobalStyle`
    ${reset}
    
    *{
        box-sizing: border-box;
    }

    body{
      background-color: #555;
    }

    a{
      text-decoration: none;
    }
`;
