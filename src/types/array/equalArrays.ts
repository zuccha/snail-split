const equalArrays = <T>(left: T[], right: T[]): boolean => {
  if (left === right) {
    return true
  }

  if (left.length !== right.length) {
    return false
  }

  for (let i = 0; i < left.length; ++i) {
    if (left[i] !== right[i]) {
      return false
    }
  }

  return true
}


export default equalArrays
