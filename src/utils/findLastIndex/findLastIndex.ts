const findLastIndex = <T>(
  list: T[],
  predicate: (value: T, index: number, obj: T[]) => boolean,
): number => {
  for (let i = list.length - 1; i >= 0; --i) {
    if (predicate(list[i], i, list)) {
      return i
    }
  }

  return -1
}


export default findLastIndex
