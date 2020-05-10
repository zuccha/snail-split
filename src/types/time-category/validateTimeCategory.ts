import ITimeCategory from './ITimeCategory'


const validateTimeCategory = (
  maybeTimeCategory: unknown,
  defaultValue: ITimeCategory,
): ITimeCategory => {
  if (
    maybeTimeCategory === 'current'
    || maybeTimeCategory === 'pb'
    || maybeTimeCategory === 'wr'
    || maybeTimeCategory === 'gold'
  ) {
    return maybeTimeCategory
  }

  return defaultValue
}


export default validateTimeCategory