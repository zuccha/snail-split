import { validateString } from '../string'
import { validateTime } from '../time'
import ISegment from './ISegment'
import defaultSegment from './defaultSegment'


const validateSegment = (
  maybeSegment: unknown,
  defaultValue = defaultSegment,
): ISegment => {
  if (typeof maybeSegment !== 'object' || maybeSegment === null) {
    return defaultValue
  }

  const inputSegment = maybeSegment as { [key: string]: unknown }
  return {
    name: validateString(inputSegment.name, defaultValue.name),
    currentRelativeTime: validateTime(inputSegment.currentRelativeTime, defaultValue.currentRelativeTime),
    pbRelativeTime: validateTime(inputSegment.pbRelativeTime, defaultValue.pbRelativeTime),
    wrRelativeTime: validateTime(inputSegment.wrRelativeTime, defaultValue.wrRelativeTime),
    goldRelativeTime: validateTime(inputSegment.goldRelativeTime, defaultValue.goldRelativeTime),
  }
}


export default validateSegment
