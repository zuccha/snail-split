const validate = (
  maybeInteger: unknown,
  defaultValue = 0,
): number => {
  return typeof maybeInteger === 'number' && Number.isInteger(maybeInteger)
    ? maybeInteger
    : defaultValue
}


export default validate
