import * as Color from '../color'


interface Theme {
  app: {
    colorBg: Color.Color
    colorFg: Color.Color
  }
  header: {
    titleColorBg: Color.Color
    titleColorFg: Color.Color
    borderColorBg: Color.Color
    borderColorFg: Color.Color
  }
  segments: {
    borderColorBg: Color.Color
    borderColorFg: Color.Color
    headerColorBg: Color.Color
    headerColorFg: Color.Color
    itemEvenColorBg: Color.Color
    itemEvenColorFg: Color.Color
    itemOddColorBg: Color.Color
    itemOddColorFg: Color.Color
    itemCurrentColorBg: Color.Color
    itemCurrentColorFg: Color.Color
    deltaTimeColorFgNegative: Color.Color
    deltaTimeColorFgNeutral: Color.Color
    deltaTimeColorFgPositive: Color.Color
  }
  time: {
    colorBg: Color.Color
    colorFgNegative: Color.Color
    colorFgNeutral: Color.Color
    colorFgPositive: Color.Color
    colorFgPaused: Color.Color
  }
  snackbar: {
    neutralColorBg: Color.Color
    neutralColorFg: Color.Color
    successColorBg: Color.Color
    successColorFg: Color.Color
    failureColorBg: Color.Color
    failureColorFg: Color.Color
    warningColorBg: Color.Color
    warningColorFg: Color.Color
  }
}


export default Theme
