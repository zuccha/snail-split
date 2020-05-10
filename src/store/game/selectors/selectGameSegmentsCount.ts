import { createSelector } from 'reselect'
import selectGame from './selectGame'


const selectGameSegmentsCount = createSelector(
  selectGame,
  game => {
    return game.segments.length
  },
)


export default selectGameSegmentsCount
