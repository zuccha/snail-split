import { createSelector } from 'reselect'
import { IEitherErrorOr, isError } from '../../../types/either-error-or'
import { makeComputeSegmentDeltaTime } from '../../../types/game'
import { ITime, ITimeCategory, ITimeFrame } from '../../../types/time'
import { IStateRoot } from '../../types'
import selectGame from './selectGame'


type ISelectGameSegmentDeltaTime = (state: IStateRoot) => IEitherErrorOr<ITime>


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
    eitherErrorOrGame => {
      if (isError(eitherErrorOrGame)) {
        return {
          error: `Failed to select delta time for segment ${segmentIndex}, `
            + `${leftTimeCategory}-${rightTimeCategory} ${timeFrame}: `
            + 'game does not exist',
        }
      }

      return {
        data: selectComputeDeltaTime(eitherErrorOrGame.data),
      }
    },
  )
}


export default makeSelectGameSegmentDeltaTime
