import { validateString } from '../string'
import * as Time from '../time'
import Segment from './Segment'
import defaultSegment from './defaultSegment'


const validate = (
  maybeSegment: unknown,
  defaultValue = defaultSegment,
): Segment => {
  if (typeof maybeSegment !== 'object' || maybeSegment === null) {
    return defaultValue
  }

  const inputSegment = maybeSegment as { [key: string]: unknown }
  return {
    name: validateString(inputSegment.name, defaultValue.name),
    currentAbsoluteTime: Time.validate(inputSegment.currentAbsoluteTime, defaultValue.currentAbsoluteTime),
    pbAbsoluteTime: Time.validate(inputSegment.pbAbsoluteTime, defaultValue.pbAbsoluteTime),
    wrAbsoluteTime: Time.validate(inputSegment.wrAbsoluteTime, defaultValue.wrAbsoluteTime),
    goldRelativeTime: Time.validate(inputSegment.goldRelativeTime, defaultValue.goldRelativeTime),
  }
}


export default validate