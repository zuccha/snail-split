import { createSelector } from 'reselect'
import { isError } from '../../../types/either-error-or'
import selectGame from './selectGame'


const selectGameTime = createSelector(
  selectGame,
  eitherErrorOrGame => {
    if (isError(eitherErrorOrGame)) {
      return {
        error: 'Failed to select time: game does not exits',
      }
    }

    const game = eitherErrorOrGame.data
    return {
      data: game.segments.reduce((acc, segment) => (
        acc + (segment.currentRelativeTime || 0)
      ), 0),
    }
  },
)


export default selectGameTime
