import range from '../../utils/range'
import { ITime, ITimeCategory, ITimeFrame } from '../time'
import IGame from './IGame'
import makeComputeTimes from './makeComputeSegmentTimes'


const makeComputeSegmentDeltaTimes = (
  leftTimeCategory: ITimeCategory,
  rightTimeCategory: ITimeCategory,
  timeFrame: ITimeFrame,
): ((game: IGame) => ITime[]) => {
  const computeLeftTimes = makeComputeTimes(leftTimeCategory, timeFrame)
  const computeRightTimes = makeComputeTimes(rightTimeCategory, timeFrame)

  return (game: IGame): ITime[] => {
    const leftTimes = computeLeftTimes(game)
    const rightTimes = computeRightTimes(game)

    const maxLength = Math.max(leftTimes.length, rightTimes.length)
    return range(maxLength).map(segmentIndex => {
      return leftTimes[segmentIndex] === undefined || rightTimes[segmentIndex] === undefined
        ? undefined
        : leftTimes[segmentIndex]! - rightTimes[segmentIndex]!
    })
  }
}


export default makeComputeSegmentDeltaTimes
