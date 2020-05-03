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
    timeLastRelative: validateTime(inputSegment.timeLastRelative, defaultValue.timeLastRelative),
    timeBestRelative: validateTime(inputSegment.timeBestRelative, defaultValue.timeBestRelative),
    timeGoldRelative: validateTime(inputSegment.timeGoldRelative, defaultValue.timeGoldRelative),
  }
}


export default validateSegment
