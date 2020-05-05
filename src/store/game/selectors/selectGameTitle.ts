import { createSelector } from 'reselect'
import { isError } from '../../../types/either-error-or'
import selectGame from './selectGame'


const selectGameTitle = createSelector(
  selectGame,
  eitherErrorOrGame => {
    if (isError(eitherErrorOrGame)) {
      return {
        error: 'Failed to select game title: game does not exist',
      }
    }

    const game = eitherErrorOrGame.data
    return {
      data: game.title,
    }
  },
)


export default selectGameTitle
