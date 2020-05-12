import { createSelector } from 'reselect'
import * as Game from '../../../types/game'
import * as Time from '../../../types/time'
import * as TimeCategory from '../../../types/time-category'
import * as TimeFrame from '../../../types/time-frame'
import { IStateRoot } from '../../types'
import selectGame from './selectGame'


type ISelectGameSegmentTime = (state: IStateRoot) => Time.Time


const makeSelectGameSegmentTime = (
  segmentIndex: number,
  timeCategory: TimeCategory.TimeCategory,
  timeFrame: TimeFrame.TimeFrame,
): ISelectGameSegmentTime => {
  const selectComputeTime = Game.makeComputeSegmentTime(segmentIndex, timeCategory, timeFrame)

  return createSelector(
    selectGame,
    game => {
      return selectComputeTime(game)
    },
  )
}


export default makeSelectGameSegmentTime
