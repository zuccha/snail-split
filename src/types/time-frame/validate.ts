import TimeFrame from './TimeFrame'


const validate = (
  maybeTimeFrame: unknown,
  defaultValue: TimeFrame,
): TimeFrame => {
  return maybeTimeFrame === 'absolute' || maybeTimeFrame === 'relative'
    ? maybeTimeFrame
    : defaultValue
}


export default validate
