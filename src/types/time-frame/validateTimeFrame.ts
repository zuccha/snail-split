import ITimeFrame from './ITimeFrame'


const validateTimeFrame = (
  maybeTimeFrame: unknown,
  defaultValue: ITimeFrame,
): ITimeFrame => {
  if (maybeTimeFrame === 'absolute' || maybeTimeFrame === 'relative') {
    return maybeTimeFrame
  }

  return defaultValue
}


export default validateTimeFrame
