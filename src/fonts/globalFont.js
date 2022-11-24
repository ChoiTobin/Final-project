import { createGlobalStyle } from "styled-components";

const GlobalFont = createGlobalStyle`
  @font-face {
	font-family: "inter";
	src: url("./fonts/Inter-Black.woff");
  font-weight: 900;
  }

  @font-face {
    font-family: "inter";
    src: url("./fonts/Inter-ExtraBold.woff");
    font-weight: 800;
  }

  @font-face {
    font-family: "inter";
    src: url("./fonts/Inter-Bold.woff");
    font-weight: 700;
  }

  @font-face {
    font-family: "inter";
    src: url("./fonts/Inter-SemiBold.woff");
    font-weight: 600;
  }

  @font-face {
    font-family: "inter";
    src: url("./fonts/Inter-Medium.woff");
    font-weight: 500;
  }

  @font-face {
    font-family: "inter";
    src: url("./fonts/Inter-Regular.woff");
    font-weight: 400;
  }

  @font-face {
    font-family: "inter";
    src: url("./fonts/Inter-Light.woff");
    font-weight: 300;
  }

  @font-face {
    font-family: "inter";
    src: url("./fonts/Inter-ExtraLight.woff");
    font-weight: 200;
  }

  @font-face {
    font-family: "inter";
    src: url("./fonts/Inter-Thin.woff");
    font-weight: 100;
  }
`;

export default GlobalFont;