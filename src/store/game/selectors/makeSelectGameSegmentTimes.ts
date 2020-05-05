import { createSelector } from 'reselect'
import { IEitherErrorOr, isError } from '../../../types/either-error-or'
import { makeComputeSegmentTimes } from '../../../types/game'
import { ITime, ITimeCategory, ITimeFrame } from '../../../types/time'
import { IStateRoot } from '../../types'
import selectGame from './selectGame'


type IMakeSelectGameSegmentTimes = (state: IStateRoot) => IEitherErrorOr<ITime[]>

const makeSelectGameSegmentTimes = (
  timeCategory: ITimeCategory,
  timeFrame: ITimeFrame,
): IMakeSelectGameSegmentTimes => {
  const selectComputeTimes = makeComputeSegmentTimes(timeCategory, timeFrame)

  return createSelector(
    selectGame,
    eitherErrorOrGame => {
      if (isError(eitherErrorOrGame)) {
        return {
          error: 'Failed to select '
            + `${timeCategory} ${timeFrame} times: `
            + 'game does not exists',
        }
      }

      return {
        data: selectComputeTimes(eitherErrorOrGame.data),
      }
    },
  )
}


export default makeSelectGameSegmentTimes
