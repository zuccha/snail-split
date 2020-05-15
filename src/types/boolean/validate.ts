import fatal from '../../utils/fatal'


const validate = (
  maybeBoolean: unknown,
  defaultValue = false,
  property = 'boolean',
): boolean => {
  if (maybeBoolean === undefined) {
    return defaultValue
  }

  if (typeof maybeBoolean !== 'boolean') {
    fatal(
      `Failed to validate ${property}, `
      + `a boolean was expected but "${maybeBoolean}" was found instead`,
    )
  }

  return typeof maybeBoolean === 'boolean'
    ? maybeBoolean
    : defaultValue
}


export default validate
