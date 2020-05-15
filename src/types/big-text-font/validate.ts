import fatal from '../../utils/fatal'
import BigTextFont from './BigTextFont'


const validate = (
  maybeTimeFont: unknown,
  defaultValue: BigTextFont = 'slim',
  property = 'bigTextFont',
): BigTextFont => {
  if (maybeTimeFont === undefined) {
    return defaultValue
  }

  if (typeof maybeTimeFont !== 'string' || (
    maybeTimeFont !== 'slim' &&
    maybeTimeFont !== 'fat'
  )) {
    fatal(
      `Failed to validate ${property}, `
      + `a time font was expected but "${maybeTimeFont}" was found instead`,
    )
  }

  return maybeTimeFont as BigTextFont
}


export default validate
