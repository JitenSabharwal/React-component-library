import { createGlobalStyle } from "styled-components"

import * as config from "./config"
import slickStyles from "./slick"

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
    color: ${config.color.text};
    background: ${config.color.bg};
    font-family: ${config.fontFamily.base};
    font-size: ${config.fontSize.base};
    font-weight: ${config.fontWeight.regular};
    line-height: ${config.lineHeight.base};
  }

  strong {
    font-weight: ${config.fontWeight.bold};
  }

  button {
    background-color: white;
  }

  * {
    box-sizing: border-box;
    outline: none;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
  }

  *:before, *:after {
    box-sizing: inherit;
    outline: inherit;
    -webkit-tap-highlight-color: inherit;
    -webkit-font-smoothing: inherit;
  }

  ${slickStyles}
`
