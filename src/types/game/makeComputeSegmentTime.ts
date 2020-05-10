import when from '../../utils/when'
import { ISegment } from '../segment'
import { ITime } from '../time'
import { ITimeCategory } from '../time-category'
import { ITimeFrame } from '../time-frame'
import IGame from './IGame'


const makeComputeSegmentTime = (
  segmentIndex: number,
  timeCategory: ITimeCategory,
  timeFrame: ITimeFrame,
): ((game: IGame) => ITime) => {
  const absoluteTimeKey: (keyof ISegment) | undefined = when([
    [timeCategory === 'current', () => 'currentAbsoluteTime'],
    [timeCategory === 'pb',      () => 'pbAbsoluteTime'],
    [timeCategory === 'wr',      () => 'wrAbsoluteTime'],
  ], undefined)

  if (absoluteTimeKey === undefined) {
    return () => undefined
  }

  if (timeFrame === 'relative') {
    return game => {
      if (segmentIndex === 0) {
        return game.segments[segmentIndex][absoluteTimeKey]
      }

      const previousSegment = game.segments[segmentIndex - 1]
      const currentSegment = game.segments[segmentIndex]

      if (false
        || previousSegment === undefined
        || currentSegment === undefined
        || previousSegment[absoluteTimeKey] === undefined
        || currentSegment[absoluteTimeKey] === undefined
      ) {
        return undefined
      }

      return currentSegment[absoluteTimeKey]! - previousSegment[absoluteTimeKey]!
    }
  }

  if (timeFrame === 'absolute') {
    return game => {
      const currentSegment = game.segments[segmentIndex]
      return currentSegment === undefined
        ? undefined
        : currentSegment[absoluteTimeKey]
    }
  }

  return () => undefined
}


export default makeComputeSegmentTime
