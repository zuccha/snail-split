const mapValues = <T>(
  obj: { [key: string]: T },
  map: (key: string, value: T) => T,
): { [key: string]: T } => {
  const mappedObj: { [key: string]: T } = {}
  Object
    .entries(obj)
    .forEach(([key, value]) => { mappedObj[key] = map(key, value) })
  return mappedObj
}


export default mapValues
