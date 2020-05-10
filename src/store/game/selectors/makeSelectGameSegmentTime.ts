import { createSelector } from 'reselect'
import { makeComputeSegmentTime } from '../../../types/game'
import { ITime } from '../../../types/time'
import { ITimeCategory } from '../../../types/time-category'
import { ITimeFrame } from '../../../types/time-frame'
import { IStateRoot } from '../../types'
import selectGame from './selectGame'


type ISelectGameSegmentTime = (state: IStateRoot) => ITime


const makeSelectGameSegmentTime = (
  segmentIndex: number,
  timeCategory: ITimeCategory,
  timeFrame: ITimeFrame,
): ISelectGameSegmentTime => {
  const selectComputeTime = makeComputeSegmentTime(segmentIndex, timeCategory, timeFrame)

  return createSelector(
    selectGame,
    game => {
      return selectComputeTime(game)
    },
  )
}


export default makeSelectGameSegmentTime
