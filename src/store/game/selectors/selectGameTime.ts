import { createSelector } from 'reselect'
import selectGame from './selectGame'


const selectGameTime = createSelector(
  selectGame,
  game => {
    return game.segments.reduce((acc, segment) => (
      acc + (segment.timeLastRelative || 0)
    ), 0)
  },
)


export default selectGameTime
