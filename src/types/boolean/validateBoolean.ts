const validateBoolean = (
  maybeBoolean: unknown,
  defaultValue = false,
): boolean => {
  return typeof maybeBoolean === 'boolean'
    ? maybeBoolean
    : defaultValue
}


export default validateBoolean
