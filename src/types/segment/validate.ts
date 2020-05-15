import fatal from '../../utils/fatal'
import * as S from '../string'
import * as Time from '../time'
import Segment from './Segment'
import defaultSegment from './defaultSegment'


const validate = (
  maybeSegment: unknown,
  defaultValue = defaultSegment,
  property = 'property',
): Segment => {
  if (maybeSegment === undefined) {
    return defaultValue
  }

  if (typeof maybeSegment !== 'object' || maybeSegment === null) {
    fatal(
      `Failed to validate ${property}, `
      + `a segment was expected but "${maybeSegment}" was found instead`,
    )
  }

  const inputSegment = maybeSegment as { [key: string]: unknown }
  return {
    name: S.validate(
      inputSegment.name,
      defaultValue.name,
      `${property}.name`,
    ),
    currentAbsoluteTime: Time.validate(
      inputSegment.currentAbsoluteTime,
      defaultValue.currentAbsoluteTime,
      `${property}.currentAbsoluteTime`,
    ),
    pbAbsoluteTime: Time.validate(
      inputSegment.pbAbsoluteTime,
      defaultValue.pbAbsoluteTime,
      `${property}.pbAbsoluteTime`,
    ),
    wrAbsoluteTime: Time.validate(
      inputSegment.wrAbsoluteTime,
      defaultValue.wrAbsoluteTime,
      `${property}.wrAbsoluteTime`,
    ),
    goldRelativeTime: Time.validate(
      inputSegment.goldRelativeTime,
      defaultValue.goldRelativeTime,
      `${property}.goldRelativeTime`,
    ),
  }
}


export default validate
