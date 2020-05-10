import { createSelector } from 'reselect'
import { makeComputeSegmentDeltaTime } from '../../../types/game'
import { ITime, ITimeCategory, ITimeFrame } from '../../../types/time'
import { IStateRoot } from '../../types'
import selectGame from './selectGame'


type ISelectGameSegmentDeltaTime = (state: IStateRoot) => ITime


const makeSelectGameSegmentDeltaTime = (
  segmentIndex: number,
  leftTimeCategory: ITimeCategory,
  rightTimeCategory: ITimeCategory,
  timeFrame: ITimeFrame,
): ISelectGameSegmentDeltaTime => {
  const selectComputeDeltaTime = makeComputeSegmentDeltaTime(
    segmentIndex,
    leftTimeCategory,
    rightTimeCategory,
    timeFrame,
  )

  return createSelector(
    selectGame,
    game => {
      return selectComputeDeltaTime(game)
    },
  )
}


export default makeSelectGameSegmentDeltaTime
