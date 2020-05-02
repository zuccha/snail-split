const findLast = <T>(
  list: T[],
  predicate: (value: T, index: number, obj: T[]) => boolean,
): T | undefined => {
  for (let i = list.length - 1; i >= 0; --i) {
    if (predicate(list[i], i, list)) {
      return list[i]
    }
  }

  return undefined
}


export default findLast
