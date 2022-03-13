import { createGlobalStyle } from "styled-components";

export const lightTheme = {
    body: "#ccc",
    fontColor: "#000",
    nav: "#122738",
    footer:"#122738"
  };
  
  export const darkTheme = {
    body: "#1a1919",
    fontColor: "#fff",
    nav:"#151515",
    footer:"#151515"
  };
  
  export const GlobalStyles = createGlobalStyle`
      body {
          background-color: ${(props) => props.theme.body};
      }

      nav {
        background-color: ${(props) => props.theme.nav};
    }

    footer {
      background-color: ${(props) => props.theme.footer};
    }
  `;