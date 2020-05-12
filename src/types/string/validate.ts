const validate = (
  maybeString: unknown,
  defaultValue = '',
): string => {
  return typeof maybeString === 'string'
    ? maybeString
    : defaultValue
}


export default validate
