const validateNumber = (
  maybeNumber: unknown,
  defaultValue = 0,
): number => {
  return typeof maybeNumber === 'number'
    ? maybeNumber
    : defaultValue
}


export default validateNumber
