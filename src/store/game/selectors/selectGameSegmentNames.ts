import { createSelector } from 'reselect'
import { isError, IEitherErrorOr } from '../../../types/either-error-or'
import { IStateRoot } from '../../types'
import selectGame from './selectGame'


type ISelectGameSegmentNames = (state: IStateRoot) => IEitherErrorOr<string[]>


const selectGameSegmentNames: ISelectGameSegmentNames = createSelector(
  selectGame,
  eitherErrorOrGame => {
    if (isError(eitherErrorOrGame)) {
      return {
        error: 'Failed to select segment names: game does not exits',
      }
    }

    const game = eitherErrorOrGame.data
    return {
      data: game.segments.map(segment => segment.name),
    }
  },
)


export default selectGameSegmentNames
