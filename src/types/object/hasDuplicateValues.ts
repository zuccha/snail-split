const hasDuplicateValues = <T>(
  obj: { [key: string]: T },
): boolean => {
  const isKeyPresentByValue: { [value: string]: boolean } = {}
  for (const value of Object.values(obj)) {
    if (isKeyPresentByValue[`${value}`]) {
      return true
    }
    if (value !== undefined) {
      isKeyPresentByValue[`${value}`] = true
    }
  }
  return false
}


export default hasDuplicateValues
