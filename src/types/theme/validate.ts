import fatal from '../../utils/fatal'
import * as Color from '../color'
import * as O from '../object'
import Theme from './Theme'
import defaultTheme from './defaultTheme'


const validate = (
  maybeTheme: unknown,
  defaultValue: Theme = defaultTheme,
  property = 'theme',
): Theme => {
  if (maybeTheme === undefined) {
    return defaultValue
  }

  if (typeof maybeTheme !== 'object' || maybeTheme === null) {
    fatal(
      `Failed to validate ${property}, `
      + `a theme was expected but "${maybeTheme}" was found instead`,
    )
  }

  const themeObject = maybeTheme as { [name: string]: unknown }

  const appObject = O.validate(themeObject.app, {}, `${property}.app`)
  const headerObject = O.validate(themeObject.header, {}, `${property}.header`)
  const segmentsObject = O.validate(themeObject.segments, {}, `${property}.segments`)
  const timeObject = O.validate(themeObject.time, {}, `${property}.time`)
  const snackbarObject = O.validate(themeObject.snackbar, {}, `${property}.snackbar`)

  return {
    app: {
      colorBg: Color.validate(
        appObject.colorBg,
        defaultValue.app.colorBg,
        `${property}.colorBg`,
      ),
      colorFg: Color.validate(
        appObject.colorFg,
        defaultValue.app.colorFg,
        `${property}.colorFg`,
      ),
    },

    header: {
      titleColorBg: Color.validate(
        headerObject.titleColorBg,
        defaultValue.header.titleColorBg,
        `${property}.titleColorBg`,
      ),
      titleColorFg: Color.validate(
        headerObject.titleColorFg,
        defaultValue.header.titleColorFg,
        `${property}.titleColorFg`,
      ),
      borderColorBg: Color.validate(
        headerObject.borderColorBg,
        defaultValue.header.borderColorBg,
        `${property}.borderColorBg`,
      ),
      borderColorFg: Color.validate(
        headerObject.borderColorFg,
        defaultValue.header.borderColorFg,
        `${property}.borderColorFg`,
      ),
    },

    segments: {
      borderColorBg: Color.validate(
        segmentsObject.borderColorBg,
        defaultValue.segments.borderColorBg,
        `${property}.borderColorBg`,
      ),
      borderColorFg: Color.validate(
        segmentsObject.borderColorFg,
        defaultValue.segments.borderColorFg,
        `${property}.borderColorFg`,
      ),
      headerColorBg: Color.validate(
        segmentsObject.headerColorBg,
        defaultValue.segments.headerColorBg,
        `${property}.headerColorBg`,
      ),
      headerColorFg: Color.validate(
        segmentsObject.headerColorFg,
        defaultValue.segments.headerColorFg,
        `${property}.headerColorFg`,
      ),
      itemEvenColorBg: Color.validate(
        segmentsObject.itemEvenColorBg,
        defaultValue.segments.itemEvenColorBg,
        `${property}.itemEvenColorBg`,
      ),
      itemEvenColorFg: Color.validate(
        segmentsObject.itemEvenColorFg,
        defaultValue.segments.itemEvenColorFg,
        `${property}.itemEvenColorFg`,
      ),
      itemOddColorBg: Color.validate(
        segmentsObject.itemOddColorBg,
        defaultValue.segments.itemOddColorBg,
        `${property}.itemOddColorBg`,
      ),
      itemOddColorFg: Color.validate(
        segmentsObject.itemOddColorFg,
        defaultValue.segments.itemOddColorFg,
        `${property}.itemOddColorFg`,
      ),
      itemCurrentColorBg: Color.validate(
        segmentsObject.itemCurrentColorBg,
        defaultValue.segments.itemCurrentColorBg,
        `${property}.itemCurrentColorBg`,
      ),
      itemCurrentColorFg: Color.validate(
        segmentsObject.itemCurrentColorFg,
        defaultValue.segments.itemCurrentColorFg,
        `${property}.itemCurrentColorFg`,
      ),
      deltaTimeColorFgNegative: Color.validate(
        segmentsObject.deltaTimeColorFgNegative,
        defaultValue.segments.deltaTimeColorFgNegative,
        `${property}.deltaTimeColorFgNegative`,
      ),
      deltaTimeColorFgNeutral: Color.validate(
        segmentsObject.deltaTimeColorFgNeutral,
        defaultValue.segments.deltaTimeColorFgNeutral,
        `${property}.deltaTimeColorFgNeutral`,
      ),
      deltaTimeColorFgPositive: Color.validate(
        segmentsObject.deltaTimeColorFgPositive,
        defaultValue.segments.deltaTimeColorFgPositive,
        `${property}.deltaTimeColorFgPositive`,
      ),
    },

    time: {
      colorBg: Color.validate(
        timeObject.colorBg,
        defaultValue.time.colorBg,
        `${property}.colorBg`,
      ),
      colorFgNegative: Color.validate(
        timeObject.colorFgNegative,
        defaultValue.time.colorFgNegative,
        `${property}.colorFgNegative`,
      ),
      colorFgNeutral: Color.validate(
        timeObject.colorFgNeutral,
        defaultValue.time.colorFgNeutral,
        `${property}.colorFgNeutral`,
      ),
      colorFgPositive: Color.validate(
        timeObject.colorFgPositive,
        defaultValue.time.colorFgPositive,
        `${property}.colorFgPositive`,
      ),
      colorFgPaused: Color.validate(
        timeObject.colorFgPaused,
        defaultValue.time.colorFgPaused,
        `${property}.colorFgPaused`,
      ),
    },

    snackbar: {
      neutralColorBg: Color.validate(
        snackbarObject.neutralColorBg,
        defaultValue.snackbar.neutralColorBg,
        `${property}.neutralColorBg`,
      ),
      neutralColorFg: Color.validate(
        snackbarObject.neutralColorFg,
        defaultValue.snackbar.neutralColorFg,
        `${property}.neutralColorFg`,
      ),
      successColorBg: Color.validate(
        snackbarObject.successColorBg,
        defaultValue.snackbar.successColorBg,
        `${property}.successColorBg`,
      ),
      successColorFg: Color.validate(
        snackbarObject.successColorFg,
        defaultValue.snackbar.successColorFg,
        `${property}.successColorFg`,
      ),
      failureColorBg: Color.validate(
        snackbarObject.failureColorBg,
        defaultValue.snackbar.failureColorBg,
        `${property}.failureColorBg`,
      ),
      failureColorFg: Color.validate(
        snackbarObject.failureColorFg,
        defaultValue.snackbar.failureColorFg,
        `${property}.failureColorFg`,
      ),
      warningColorBg: Color.validate(
        snackbarObject.warningColorBg,
        defaultValue.snackbar.warningColorBg,
        `${property}.warningColorBg`,
      ),
      warningColorFg: Color.validate(
        snackbarObject.warningColorFg,
        defaultValue.snackbar.warningColorFg,
        `${property}.warningColorFg`,
      ),
    },
  }
}


export default validate
