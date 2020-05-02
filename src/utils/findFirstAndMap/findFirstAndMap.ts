const findFirstAndMap = <T>(
  list: T[],
  predicate: (value: T, index: number, obj: T[]) => boolean,
  map: (value: T, index: number, obj: T[]) => T,
): T[] => {
  const valueIndex = list.findIndex(predicate)
  if (valueIndex === -1) {
    return list
  }

  return valueIndex === -1
    ? list
    : [
      ...list.slice(0, valueIndex),
      map(list[valueIndex], valueIndex, list),
      ...list.slice(valueIndex + 1, list.length),
    ]
}

export default findFirstAndMap
