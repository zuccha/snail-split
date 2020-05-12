import { createSelector } from 'reselect'
import * as Game from '../../../types/game'
import * as Time from '../../../types/time'
import * as TimeCategory from '../../../types/time-category'
import * as TimeFrame from '../../../types/time-frame'
import { IStateRoot } from '../../types'
import selectGame from './selectGame'


type ISelectGameSegmentDeltaTime = (state: IStateRoot) => Time.Time


const makeSelectGameSegmentDeltaTime = (
  segmentIndex: number,
  leftTimeCategory: TimeCategory.TimeCategory,
  rightTimeCategory: TimeCategory.TimeCategory,
  timeFrame: TimeFrame.TimeFrame,
): ISelectGameSegmentDeltaTime => {
  const selectComputeDeltaTime = Game.makeComputeSegmentDeltaTime(
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
