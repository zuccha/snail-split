import fatal from '../../utils/fatal'


const validate = (
  maybeArray: unknown,
  defaultValue: unknown[] = [],
  property = 'array',
): unknown[] => {
  if (maybeArray === undefined) {
    return defaultValue
  }

  if (!Array.isArray(maybeArray)) {
    return fatal(
      `Failed to validate ${property}, `
      + `an array was expected but "${maybeArray}" was found instead`,
    )
  }

  return maybeArray
}


export default validate
