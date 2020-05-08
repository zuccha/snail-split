import { createSelector } from 'reselect'
import { isError, IEitherErrorOr } from '../../../types/either-error-or'
import { IStateRoot } from '../../types'
import selectGame from './selectGame'


type ISelectGameSegmentName = (state: IStateRoot) => IEitherErrorOr<string>


const makeSelectGameSegmentName = (
  segmentIndex: number,
): ISelectGameSegmentName => {
  return createSelector(
    selectGame,
    eitherErrorOrGame => {
      if (isError(eitherErrorOrGame)) {
        return {
          error: 'Failed to select segment name: game does not exits',
        }
      }

      const game = eitherErrorOrGame.data

      if (game.segments[segmentIndex] === undefined) {
        return { data: '' }
      }

      return {
        data: game.segments[segmentIndex].name,
      }
    },
  )
}


export default makeSelectGameSegmentName
