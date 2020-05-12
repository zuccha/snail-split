import TimeCategory from './TimeCategory'


const validate = (
  maybeTimeCategory: unknown,
  defaultValue: TimeCategory,
): TimeCategory => {
  if (
    maybeTimeCategory === 'current'
    || maybeTimeCategory === 'pb'
    || maybeTimeCategory === 'wr'
  ) {
    return maybeTimeCategory
  }

  return defaultValue
}


export default validate
