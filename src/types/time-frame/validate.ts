import TimeFrame from './TimeFrame'
import fatal from '../../utils/fatal'


const validate = (
  maybeTimeFrame: unknown,
  defaultValue: TimeFrame,
  property = 'timeFrame',
): TimeFrame => {
  if (maybeTimeFrame === undefined) {
    return defaultValue
  }

  if (typeof maybeTimeFrame !== 'string' || (
    maybeTimeFrame !== 'absolute'
    && maybeTimeFrame !== 'relative'
  )) {
    fatal(
      `Failed to validate ${property}, `
      + `a time frame was expected but "${maybeTimeFrame}" was found instead`,
    )
  }

  return maybeTimeFrame as TimeFrame
}


export default validate
