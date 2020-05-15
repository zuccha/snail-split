import fatal from '../../utils/fatal'


const validate = (
  maybeInteger: unknown,
  defaultValue = 0,
  property = 'property',
): number => {
  if (maybeInteger === undefined) {
    return defaultValue
  }

  if (typeof maybeInteger !== 'number' || !Number.isInteger(maybeInteger)) {
    fatal(
      `Failed to validate ${property}, `
      + `an integer was expected but "${maybeInteger}" was found instead`,
    )
  }

  return maybeInteger as number
}


export default validate
