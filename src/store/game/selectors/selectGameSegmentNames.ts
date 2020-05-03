import { createSelector } from 'reselect'
import selectGame from './selectGame'


const selectGameSegmentNames = createSelector(
  selectGame,
  game => {
    return game.segments.map(segment => segment.name)
  },
)


export default selectGameSegmentNames
