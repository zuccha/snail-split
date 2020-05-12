const validate = (
  maybeBoolean: unknown,
  defaultValue = false,
): boolean => {
  return typeof maybeBoolean === 'boolean'
    ? maybeBoolean
    : defaultValue
}


export default validate
