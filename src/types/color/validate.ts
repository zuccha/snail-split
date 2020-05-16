import Color from './Color'
import fatal from '../../utils/fatal'



const validate = (
  maybeColor: unknown,
  defaultValue: Color = undefined,
  property = 'color',
): Color => {
  if (maybeColor === undefined) {
    return defaultValue
  }

  if (maybeColor === null) {
    return undefined
  }

  if (typeof maybeColor !== 'string') {
    fatal(
      `Failed to validate ${property}, `
      + `a color was expected but "${maybeColor}" was found instead`,
    )
  }

  return maybeColor as Color
}


export default validate
