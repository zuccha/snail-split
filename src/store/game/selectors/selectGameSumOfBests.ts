import { createSelector } from 'reselect'
import selectGame from './selectGame'


const selectGameSumOfBests = createSelector(
  selectGame,
  game => {
    return game.sumOfBests
  },
)


export default selectGameSumOfBests
