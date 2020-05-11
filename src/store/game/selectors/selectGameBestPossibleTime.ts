import { createSelector } from 'reselect'
import selectGame from './selectGame'


const selectGameBestPossibleTime = createSelector(
  selectGame,
  game => {
    return game.bestPossibleTime
  },
)


export default selectGameBestPossibleTime
