import Theme from './Theme'


const defaultTheme: Theme = {
  app: {
    colorBg: 'black',
    colorFg: 'white',
  },
  header: {
    titleColorBg: 'black',
    titleColorFg: 'white',
    borderColorBg: 'black',
    borderColorFg: 'white',
  },
  segments: {
    dividerColorBg: 'black',
    dividerColorFg: 'white',
    headerColorBg: 'black',
    headerColorFg: 'white',
    itemEvenColorBg: 'black',
    itemEvenColorFg: 'white',
    itemOddColorBg: 'black',
    itemOddColorFg: 'white',
    itemCurrentColorBg: 'black',
    itemCurrentColorFg: 'white',
    deltaTimeColorFgNegative: 'green',
    deltaTimeColorFgNeutral: 'white',
    deltaTimeColorFgPositive: 'red',
  },
  time: {
    colorBg: 'black',
    colorFgNegative: 'red',
    colorFgNeutral: 'white',
    colorFgPositive: 'green',
    colorFgPaused: 'white',
  },
  snackbar: {
    neutralColorBg: 'black',
    neutralColorFg: 'white',
    successColorBg: 'black',
    successColorFg: 'green',
    failureColorBg: 'black',
    failureColorFg: 'red',
    warningColorBg: 'black',
    warningColorFg: 'orange',
  },
}


export default defaultTheme
