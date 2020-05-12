import * as Time from '../time'
import { ITimeCategory } from '../time-category'
import { ITimeFrame } from '../time-frame'
import IGame from './IGame'
import makeComputeSegmentTime from './makeComputeSegmentTime'


const makeComputeSegmentDeltaTime = (
  segmentIndex: number,
  leftTimeCategory: ITimeCategory,
  rightTimeCategory: ITimeCategory,
  timeFrame: ITimeFrame,
): ((game: IGame) => Time.Time) => {
  const computeSegmentLeftTime = makeComputeSegmentTime(segmentIndex, leftTimeCategory, timeFrame)
  const computeSegmentRightTime = makeComputeSegmentTime(segmentIndex, rightTimeCategory, timeFrame)

  return game => {
    const leftTime = computeSegmentLeftTime(game)
    const rightTime = computeSegmentRightTime(game)

    return leftTime === undefined || rightTime === undefined
      ? undefined
      : leftTime - rightTime
  }
}


export default makeComputeSegmentDeltaTime
