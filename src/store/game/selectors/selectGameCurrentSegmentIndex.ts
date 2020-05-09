import { createSelector } from 'reselect'
import { isError } from '../../../types/either-error-or'
import { getCurrentSegmentIndex } from '../../../types/game'
import selectGame from './selectGame'


const selectGameCurrentSegmentIndex = createSelector(
  selectGame,
  eitherErrorOrGame => {
    if (isError(eitherErrorOrGame)) {
      return -1
    }

    const game = eitherErrorOrGame.data
    return getCurrentSegmentIndex(game)
  },
)


export default selectGameCurrentSegmentIndex
