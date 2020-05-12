import Time from './Time'


const validate = (
  maybeTime: unknown,
  defaultValue: Time = undefined,
): Time => {
  if (maybeTime === undefined) {
    return maybeTime
  }

  if (typeof maybeTime === 'number') {
    return maybeTime
  }

  return defaultValue
}


export default validate
