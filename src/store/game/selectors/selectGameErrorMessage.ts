import { createSelector } from 'reselect'
import selectGame from './selectGame'


const selectGameTitle = createSelector(
  selectGame,
  game => game.errorMessage,
)


export default selectGameTitle
