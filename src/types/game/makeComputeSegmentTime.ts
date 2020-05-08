import when from '../../utils/when'
import { ISegment } from '../segment'
import { ITime, ITimeCategory, ITimeFrame } from '../time'
import IGame from './IGame'


const makeComputeSegmentTime = (
  segmentIndex: number,
  timeCategory: ITimeCategory,
  timeFrame: ITimeFrame,
): ((game: IGame) => ITime) => {
  const relativeTimeKey: (keyof ISegment) | undefined = when([
    [timeCategory === 'current', () => 'currentRelativeTime'],
    [timeCategory === 'pb',      () => 'pbRelativeTime'],
    [timeCategory === 'wr',      () => 'wrRelativeTime'],
    [timeCategory === 'gold',    () => 'goldRelativeTime'],
  ], undefined)

  if (relativeTimeKey === undefined) {
    return () => undefined
  }

  if (timeFrame === 'relative') {
    return game => {
      if (game.segments[segmentIndex] === undefined) {
        return undefined
      }

      return game.segments[segmentIndex][relativeTimeKey]
    }
  }

  if (timeFrame === 'absolute') {
    return game => {
      if (game.segments[segmentIndex] === undefined) {
        return undefined
      }

      let absoluteTime = game.segments[segmentIndex][relativeTimeKey]
      let index = 0

      while (index < segmentIndex && absoluteTime !== undefined) {
        const relativeTime = game.segments[index][relativeTimeKey]
        absoluteTime = relativeTime
          ? absoluteTime + relativeTime
          : undefined
        index = index + 1
      }

      return absoluteTime
    }
  }

  return () => undefined
}


export default makeComputeSegmentTime
