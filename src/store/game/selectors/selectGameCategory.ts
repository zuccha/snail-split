import { createSelector } from 'reselect'
import selectGame from './selectGame'


const selectGameCategory = createSelector(
  selectGame,
  game => {
    return game.category
  },
)


export default selectGameCategory
