import { createSelector } from 'reselect'
import selectGame from './selectGame'


const selectGameStatus = createSelector(
  selectGame,
  game => {
    return game.status
  },
)


export default selectGameStatus
