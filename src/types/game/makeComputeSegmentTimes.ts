import when from '../../utils/when'
import { ITime, ITimeCategory, ITimeFrame } from '../time'
import IGame from './IGame'


const makeComputeSegmentTimes = (
  timeCategory: ITimeCategory,
  timeFrame: ITimeFrame,
): ((game: IGame) => ITime[]) => {
  return (game: IGame): ITime[] => {
    const relativeTimes = when([
      [timeCategory === 'current', () => game.segments.map(segment => segment.currentRelativeTime)],
      [timeCategory === 'pb',      () => game.segments.map(segment => segment.pbRelativeTime)],
      [timeCategory === 'wr',      () => game.segments.map(segment => segment.wrRelativeTime)],
      [timeCategory === 'gold',    () => game.segments.map(segment => segment.goldRelativeTime)],
    ], [])

    return when([
      [timeFrame === 'relative', () => relativeTimes],
      [timeFrame === 'absolute', () => relativeTimes.reduce<ITime[]>((acc, time, index) => {
        return time === undefined
          ? [...acc, undefined]
          : [...acc, (acc[index - 1] || 0) + time]
      }, [])],
    ], [])
  }
}


export default makeComputeSegmentTimes
