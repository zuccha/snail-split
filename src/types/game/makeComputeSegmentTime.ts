import when from '../../utils/when'
import * as Segment from '../segment'
import * as Time from '../time'
import * as TimeCategory from '../time-category'
import * as TimeFrame from '../time-frame'
import Game from './Game'


const makeComputeSegmentTime = (
  segmentIndex: number,
  timeCategory: TimeCategory.TimeCategory,
  timeFrame: TimeFrame.TimeFrame,
): ((game: Game) => Time.Time) => {
  const absoluteTimeKey: (keyof Segment.Segment) | undefined = when([
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
