import fatal from '../../utils/fatal'
import Time from './Time'


const validate = (
  maybeTime: unknown,
  defaultValue: Time = undefined,
  property = 'time',
): Time => {
  if (maybeTime === undefined) {
    return defaultValue
  }

  if (maybeTime === null) {
    return undefined
  }

  if (typeof maybeTime !== 'number' || !Number.isInteger(maybeTime)) {
    fatal(
      `Failed to validate ${property}, `
      + `a time was expected but "${maybeTime}" was found instead`,
    )
  }

  return maybeTime as Time
}


export default validate
