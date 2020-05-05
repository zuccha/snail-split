import { createSelector } from 'reselect'
import { IEitherErrorOr, isError } from '../../../types/either-error-or'
import { makeComputeSegmentDeltaTimes } from '../../../types/game'
import { ITime, ITimeCategory, ITimeFrame } from '../../../types/time'
import { IStateRoot } from '../../types'
import selectGame from './selectGame'


type IMakeSelectGameSegmentDeltaTimes = (state: IStateRoot) => IEitherErrorOr<ITime[]>


const makeSelectGameSegmentDeltaTimes = (
  leftTimeCategory: ITimeCategory,
  rightTimeCategory: ITimeCategory,
  timeFrame: ITimeFrame,
): IMakeSelectGameSegmentDeltaTimes => {
  const selectComputeDeltaTimes = makeComputeSegmentDeltaTimes(leftTimeCategory, rightTimeCategory, timeFrame)

  return createSelector(
    selectGame,
    eitherErrorOrGame => {
      if (isError(eitherErrorOrGame)) {
        return {
          error: 'Failed to select '
            + `${leftTimeCategory}-${rightTimeCategory} ${timeFrame} delta times: `
            + 'game does not exists',
        }
      }

      return {
        data: selectComputeDeltaTimes(eitherErrorOrGame.data),
      }
    },
  )
}


export default makeSelectGameSegmentDeltaTimes
