import { createSelector } from 'reselect'
import { makeComputeSegmentTime } from '../../../types/game'
import { ITime, ITimeCategory, ITimeFrame } from '../../../types/time'
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
