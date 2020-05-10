import { createSelector } from 'reselect'
import selectGame from './selectGame'


const selectGameTitle = createSelector(
  selectGame,
  game => {
    return game.title
  },
)


export default selectGameTitle
