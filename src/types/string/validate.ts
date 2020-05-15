import fatal from '../../utils/fatal'


const validate = (
  maybeString: unknown,
  defaultValue = '',
  property = 'string',
): string => {
  if (maybeString === undefined) {
    return defaultValue
  }

  if (typeof maybeString !== 'string') {
    fatal(
      `Failed to validate ${property}, `
      + `a string was expected but "${maybeString}" was found instead`,
    )
  }

  return maybeString as string
}


export default validate
