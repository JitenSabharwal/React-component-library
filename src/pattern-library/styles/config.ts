import { stripUnit } from "./helpers"

// Spacing

export const space = {
  xs: "4px",
  s: "8px",
  base: "16px",
  l: "24px",
  xl: "32px",
  xxl: "48px",
  xxxl: "64px",
  xxxxl: "80px",
}

// Breakpoints

export const breakPoint = {
  bp1200: 1200,
  bp1100: 1100,
  bp900: 900,
  bp860: 860,
  bp700: 700,
  bp630: 630,
  bp580: 580,
  bp552: 552,
  bp500: 500,
  bp460: 460,
  bp420: 420,
}

// Borders

export const borderWidth = {
  base: "1px",
  l: "2px",
}

export const borderRadius = {
  xs: "2px",
  s: "4px",
  base: "16px",
}

// Line Heights

export const lineHeight = {
  s: 1.3,
  base: 1.5,
  l: 2,
}

// Font Families

export const fontFamily = {
  base: '"Lato", sans-serif',
  alternative: '"Playfair Display", serif',
}

// Font Sizes

export const fontSize = {
  xxs: "8px",
  xs: "10px",
  s: "12px",
  base: "14px",
  l: "16px",
  xl: "20px",
  xxl: "24px",
  xxxl: "32px",
  xxxxl: "36px", // TODO: this font size is too similar to fontSizeXXXL (broken font size rythm)
  xxxxxl: "48px",
}

// Font Weights

export const fontWeight = {
  regular: 400,
  bold: 700,
  black: 900,
}

// Letter Spacings

export const letterSpacing = {
  base: "normal",
  l: "0.03em",
}

// Colors

const colorWhite = "#FFFFFF"
const colorLight = "#E0E4EA"
const colorGrey = "#C4CCD3"
const colorMidgray = "#D8D8D8"
const colorGreyDark = "#808F9B"
const colorBlue = "#013061"
const colorBlueMedium = "#4C6D90"
const colorBlueLight = "#17B0ED"
const colorBlueAlternativeLight = "#E8F6FC"
const colorBlueAlternativeDark = "#C7EBF9"
const colorYellow = "#F5A623"
const colorRed = "#F12E46"
const colorGreen = "#16997C"
const colorLightGreen = "#36DB94"
const colorLightBlueMedium = "#D1EFFB"
const colorBlack = "#000000"

export const color = {
  text: colorBlue,
  primary: colorBlueLight,
  primaryLight: colorLightBlueMedium,
  minor: colorGreyDark,
  minorLight: colorGrey,
  minorInvert: colorBlueMedium,
  alternativeLight: colorLight,
  invert: colorWhite,
  success: colorGreen,
  successLight: colorLightGreen,
  warning: colorYellow,
  alert: colorRed,
  shadow: "rgba(0, 0, 0, .1)",
  darkenImage: "rgba(0, 0, 0, .75)",
  slideText: colorWhite,
  bg: colorWhite,
  bgAlternative: colorGrey,
  bgAlternativeLight: colorLight,
  bgAlternativeLightBlue: colorBlueAlternativeLight,
  bgAlternativeLightBlueLight: "rgba(91,189,228,0.33)",
  bgAlternativeDark: colorGreyDark,
  bgAlternativeDarkBlue: colorBlueAlternativeDark,
  bgInvert: colorBlue,
  bgModal: "rgba(0, 0, 0, .25)",
  bgModalAlternative: "#252B2E",
  bgTile: colorMidgray,
  black: colorBlack,
}

// Shadows
export const cardBoxShadow = "0 4px 16px 0 rgba(0, 0, 0, 0.16)"
export const lightBoxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.05)"
export const balloonBoxShadow = "0 0px 16px 0 rgba(0, 0, 0, 0.16)"
export const slideBoxShadow = "0 16px 24px 0 rgba(0,0,0,0.08)"
// Transitions

export const transition = {
  fast: "0.1s",
  base: "0.25s",
  slow: "0.5s",
  slower: "1s",
}

export const ease = {
  outBack: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
}

// Layout

export const containerPadding = space.l

export const container = {
  xs: "512px",
  s: `${512 + 2 * stripUnit(containerPadding)}px`,
  base: "750px",
  l: "980px",
  xl: "1180px",
}

// Breakpoints & Media Queries

const screenExtraSmallMin = 320
const screenSmallMin = 360
const screenSmallMax = 767
const screenMediumMin = 768
const screenMediumMax = 1023
const screenLargeMin = 1024
const screenLargeMax = 1919
const screenExtraLargeMin = 1920
const screenExtraLargeMax = 2559
const screenUltraHdMin = 2560

export type MediaQueryDefinition = [number, number?]

export const breakpoints: { [key: string]: MediaQueryDefinition } = {
  extraSmall: [screenExtraSmallMin],
  small: [screenSmallMin],
  smallOnly: [screenSmallMin, screenSmallMax],
  medium: [screenMediumMin],
  mediumOnly: [screenMediumMin, screenMediumMax],
  large: [screenLargeMin],
  largeOnly: [screenLargeMin, screenLargeMax],
  extraLarge: [screenExtraLargeMin],
  extraLargeOnly: [screenExtraLargeMin, screenExtraLargeMax],
  ultraHd: [screenUltraHdMin],
}

// Stacking

export const zIndex = {
  header: 100,
  CTABox: 80,
  offCanvasOverlay: 890,
  modal: 900, // Has to be high enough to be compatible with TPS website.
  flyout: 910, // Has to be even higher than the modal.
}

// Misc

export const buttonHeight = "40px"
export const fieldHeight = "52px"
export const regularFieldHeight = "40px"
export const blurAmount = "10px"
export const widgetTranslateIn = "320px"
export const widgetMaxWidth = "368px"
export const calendarDayButtonMaxSize = "70px"
export const calendarDayButtonSize = "32px"
