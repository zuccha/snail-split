const validateArray = (
  maybeArray: unknown,
  defaultValue: unknown[] = [],
): unknown[] => {
  if (!Array.isArray(maybeArray)) {
    return defaultValue
  }

  return maybeArray
}


export default validateArray
