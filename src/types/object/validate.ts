import fatal from '../../utils/fatal'


const validate = (
  maybeObject: unknown,
  defaultValue: { [key: string]: unknown } = {},
  property = 'object',
): { [key: string]: unknown } => {
  if (maybeObject === undefined) {
    return defaultValue
  }

  if (typeof maybeObject !== 'object' || maybeObject === null) {
    fatal(
      `Failed to validate ${property}, `
      + `an object was expected but "${maybeObject}" was found instead`,
    )
  }

  return maybeObject as { [key: string]: unknown }
}


export default validate
