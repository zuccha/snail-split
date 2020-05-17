import Theme from './Theme'


const defaultTheme: Theme = {
  app: {
    colorBg: '#1A202C',
    colorFg: '#CBD5E0',
  },
  header: {
    titleColorBg: '#1A202C',
    titleColorFg: '#B7791F',
    borderColorBg: '#1A202C',
    borderColorFg: '#B7791F',
  },
  segments: {
    borderColorBg: '#1A202C',
    borderColorFg: '#CBD5E0',
    headerColorBg: '#1A202C',
    headerColorFg: '#CBD5E0',
    itemEvenColorBg: '#2D3748',
    itemEvenColorFg: '#CBD5E0',
    itemOddColorBg: '#4A5568',
    itemOddColorFg: '#CBD5E0',
    itemCurrentColorBg: '#2B6CB0',
    itemCurrentColorFg: '#CBD5E0',
    deltaTimeColorFgNegative: '#38A169',
    deltaTimeColorFgNeutral: '#CBD5E0',
    deltaTimeColorFgPositive: '#C53030',
  },
  time: {
    colorBg: '#1A202C',
    colorFgNegative: '#E53E3E',
    colorFgNeutral: '#CBD5E0',
    colorFgPositive: '#2F855A',
    colorFgPaused: '#A0AEC0',
  },
  snackbar: {
    neutralColorBg: '#1A202C',
    neutralColorFg: '#CBD5E0',
    successColorBg: '#1A202C',
    successColorFg: '#38A169',
    failureColorBg: '#1A202C',
    failureColorFg: '#E53E3E',
    warningColorBg: '#1A202C',
    warningColorFg: '#DD6B20',
  },
}


export default defaultTheme
