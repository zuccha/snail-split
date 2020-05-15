import fatal from '../../utils/fatal'
import TimeCategory from './TimeCategory'


const validate = (
  maybeTimeCategory: unknown,
  defaultValue: TimeCategory,
  property = 'timeCategory',
): TimeCategory => {
  if (maybeTimeCategory === undefined) {
    return defaultValue
  }

  if (typeof maybeTimeCategory !== 'string' || (
    maybeTimeCategory !== 'current'
    && maybeTimeCategory !== 'pb'
    && maybeTimeCategory !== 'wr'
  )) {
    fatal(
      `Failed to validate ${property}, `
      + `a time category was expected but "${maybeTimeCategory}" was found instead`,
    )
  }

  return maybeTimeCategory as TimeCategory
}


export default validate
