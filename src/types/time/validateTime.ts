import ITime from './ITime'


const validateTime = (
  maybeTime: unknown,
  defaultValue: ITime = undefined,
): ITime => {
  if (maybeTime === undefined) {
    return maybeTime
  }

  if (typeof maybeTime === 'number') {
    return maybeTime
  }

  return defaultValue
}


export default validateTime
