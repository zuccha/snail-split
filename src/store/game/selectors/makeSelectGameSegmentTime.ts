import { createSelector } from 'reselect'
import { IEitherErrorOr, isError } from '../../../types/either-error-or'
import { makeComputeSegmentTime } from '../../../types/game'
import { ITime, ITimeCategory, ITimeFrame } from '../../../types/time'
import { IStateRoot } from '../../types'
import selectGame from './selectGame'


type ISelectGameSegmentTime = (state: IStateRoot) => IEitherErrorOr<ITime>


const makeSelectGameSegmentTime = (
  segmentIndex: number,
  timeCategory: ITimeCategory,
  timeFrame: ITimeFrame,
): ISelectGameSegmentTime => {
  const selectComputeTime = makeComputeSegmentTime(segmentIndex, timeCategory, timeFrame)

  return createSelector(
    selectGame,
    eitherErrorOrGame => {
      if (isError(eitherErrorOrGame)) {
        return {
          error: `Failed to select time for segment ${segmentIndex}, `
            + `${timeCategory} ${timeFrame}: `
            + 'game does not exist',
        }
      }

      return {
        data: selectComputeTime(eitherErrorOrGame.data),
      }
    },
  )
}


export default makeSelectGameSegmentTime
