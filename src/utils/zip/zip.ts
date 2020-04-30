import range from '../range'


const zip = (lists: any[]) => {
  const lengthMax = Math.max(...lists.map(list => list.length))
  const zippedLists = range(lengthMax).map(i => (
    lists.map(list => i < list.length ? list[i] : undefined)
  ))
  return zippedLists
}


export default zip
