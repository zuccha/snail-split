import { createSelector } from 'reselect'
import { isError } from '../../../types/either-error-or'
import selectGame from './selectGame'


const selectGameSegmentsCount = createSelector(
  selectGame,
  eitherErrorOrGame => {
    if (isError(eitherErrorOrGame)) {
      return 0
    }

    const game = eitherErrorOrGame.data
    return game.segments.length
  },
)


export default selectGameSegmentsCount
